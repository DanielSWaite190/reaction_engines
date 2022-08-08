import { Link } from 'react-router-dom';

export default function NavBar() {
  return(
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/new">Add A Engine</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}