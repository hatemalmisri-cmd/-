(() => {
  const recipes = window.RECIPES || [];
  const categories = [
    { id: "all",       label: "All" },
    { id: "syrian",    label: "Syrian" },
    { id: "chicken",   label: "Chicken" },
    { id: "meat",      label: "Meat" },
    { id: "breakfast", label: "Breakfast" },
    { id: "fish",      label: "Fish" },
    { id: "snack",     label: "Snacks" },
  ];

  const tabsEl = document.getElementById("tabs");
  const gridEl = document.getElementById("grid");
  const emptyEl = document.getElementById("empty");
  const summaryEl = document.getElementById("summary");
  const searchEl = document.getElementById("search");
  const modalEl = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("close");

  let activeCat = "all";
  let query = "";

  function countFor(catId) {
    return catId === "all" ? recipes.length : recipes.filter(r => r.category === catId).length;
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    for (const c of categories) {
      const btn = document.createElement("button");
      btn.className = "tab" + (c.id === activeCat ? " active" : "");
      btn.innerHTML = `${c.label}<span class="count">${countFor(c.id)}</span>`;
      btn.addEventListener("click", () => {
        activeCat = c.id;
        renderTabs();
        renderGrid();
      });
      tabsEl.appendChild(btn);
    }
  }

  function matches(r) {
    if (activeCat !== "all" && r.category !== activeCat) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q) ||
      r.ingredients.some(i => i.toLowerCase().includes(q))
    );
  }

  function renderGrid() {
    const list = recipes.filter(matches);
    summaryEl.textContent = `Showing ${list.length} of ${recipes.length} recipes · all ≤ 600 kcal · ≥ 30 g protein`;
    gridEl.innerHTML = "";
    emptyEl.hidden = list.length !== 0;
    for (const r of list) {
      const card = document.createElement("button");
      card.className = "card";
      card.type = "button";
      card.innerHTML = `
        <div class="thumb" aria-hidden="true">${r.emoji}</div>
        <div class="card-body">
          <h3>${r.name}</h3>
          <div class="meta">
            <span class="chip neutral">${r.cuisine}</span>
            <span class="chip">${r.calories} kcal</span>
            <span class="chip protein">${r.protein} g protein</span>
            <span class="chip neutral">${r.time} min</span>
          </div>
        </div>
      `;
      card.addEventListener("click", () => openModal(r));
      gridEl.appendChild(card);
    }
  }

  function openModal(r) {
    modalBody.innerHTML = `
      <div class="modal-hero" aria-hidden="true">${r.emoji}</div>
      <div class="modal-content">
        <h2 id="modal-title">${r.name}</h2>
        <div class="modal-meta">
          <span class="chip neutral">${r.cuisine}</span>
          <span class="chip">${r.calories} kcal</span>
          <span class="chip protein">${r.protein} g protein</span>
          <span class="chip neutral">${r.time} min</span>
          <span class="chip neutral">${r.servings} servings</span>
        </div>
        <div class="cols">
          <div>
            <h4>Ingredients</h4>
            <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
          </div>
          <div>
            <h4>Instructions</h4>
            <ol>${r.instructions.map(s => `<li>${s}</li>`).join("")}</ol>
          </div>
        </div>
      </div>
    `;
    modalEl.hidden = false;
    modalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalEl.hidden = true;
    modalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modalEl.addEventListener("click", e => { if (e.target === modalEl) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modalEl.hidden) closeModal(); });

  searchEl.addEventListener("input", e => {
    query = e.target.value.trim();
    renderGrid();
  });

  renderTabs();
  renderGrid();
})();
