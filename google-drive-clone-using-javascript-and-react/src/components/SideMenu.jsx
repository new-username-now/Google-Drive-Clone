function SideMenu() {
  return (
    <ul class="side-nav fixed floating transparent z-depth-0">
      <li class="active">
        <a href="#!">
          <i class="material-icons blue-text text-darken-1">dashboard</i>My
          Drive
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">devices</i>Computers
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">people</i>Shared with me
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">access_time</i>Recent
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">camera</i>Google Photos
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">star</i>Starres
        </a>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">delete</i>Trash
        </a>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">cloud</i>Backup
        </a>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <a href="#">
          <i class="material-icons">storage</i>Upgrade storage
        </a>
      </li>
    </ul>
  );
}

export default SideMenu;
