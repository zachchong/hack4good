import './categories.css'

function Categories() {
  return (
    <nav className = "cats">
        <div className = "categories">
        <input type="checkbox" name="" id=""></input>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li><a >Groceries</a></li>
              <li><a>Electronics</a></li>
              <li><a >Fashion</a></li>
              <li><a >Drugs</a></li>
              <li><a >Weaponry</a></li>
              <li><a>Dinosaur</a></li>
          </ul>

        </div>
    </nav>

  );
}

export default Categories;
