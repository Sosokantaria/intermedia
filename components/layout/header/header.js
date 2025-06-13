const navigationItems = [
    {
      label: "კატეგორიები",
      path: "/category",
    },
    {
      label: "საზოგადოება",
      path: "/society",
    },
    {
      label: "პოლიტიკა",
      path: "/politics",
    },
    {
      label: "ეკონომიკა",
      path: "/economy",
    },
    {
      label: "სპორტი",
      path: "/sports",
    },
    {
      label: "მეცნიერება",
      path: "/science",
    },
    {
      label: "კულტურა",
      path: "/culture",
    },
    {
      label: "მოდა",
      path: "/fashion",
    },
    {
      label: "ჯანმრთელობა",
      path: "/health",
    },
    {
      label: "კულტურა",
      path: "/culture",
    },
    {
      label: "მოდა",
      path: "/fashion",
    },
    {
      label: "ჯანმრთელობა",
      path: "/health",
    },
    {
      label: "მეტი",
      path: "/more",
    },
  ];
  
  function createDropdownOptions() {
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-options";
  
    navigationItems.forEach((item) => {
      if (item.path !== "/more" && item.path !== "/category") {
        const option = document.createElement("a");
        option.href = item.path;
        option.textContent = item.label;
        dropdown.appendChild(option);
      }
    });
  
    return dropdown;
  }
  
  function createDropdownButton(button, item) {
    const arrow = document.createElement("img");
    arrow.src = "../assets/arrow_drop_down.svg";
    arrow.alt = "arrow_drop_down";
    button.appendChild(arrow);
  
    const dropdown = createDropdownOptions();
    button.appendChild(dropdown);
  
    button.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });
  
    document.addEventListener("click", (e) => {
      if (!button.parentElement.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  
    return button;
  }
  
  function createNavItem(item) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = item.label;
    button.classList = "button-text";
  
    if (item.path === "/category" || item.path === "/more") {
      createDropdownButton(button, item);
    }
  
    if (item.path === "/category") {
      button.classList.add("nav-item-category");
    }
  
    if (item.path === "/more") {
      button.classList.add("nav-item-more");
    }
  
    li.appendChild(button);
    return li;
  }
  
  export function initializeNavigation() {
    const desktopNavList = document.getElementById("nav-list");
    const mobileNavList = document.getElementById("mobile-nav-list");
  
    if (!desktopNavList || !mobileNavList) return;
  
    desktopNavList.innerHTML = "";
    mobileNavList.innerHTML = "";
  
    navigationItems.forEach((item) => {
      const desktopNavItem = createNavItem(item);
      const mobileNavItem = createNavItem(item);
      desktopNavList.appendChild(desktopNavItem);
      mobileNavList.appendChild(mobileNavItem);
    });
  }
  
  