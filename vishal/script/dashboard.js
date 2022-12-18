//  This Function is used for fetching all todo list.

async function FetchDataFromApi() {
    try {
        let Fetched_the_data = await fetch("https://6399f35116b0fdad774f2f63.mockapi.io/profile", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        if (Fetched_the_data.ok === true) {
            let Got_the_data = await Fetched_the_data.json();
            ShowData(Got_the_data);
        }
    } catch (error) {
        alert("Was Not Able To Fetch The Data");
    }
}

FetchDataFromApi();

function ShowData(Got_the_data) {
    let body = document.querySelector("body");
    body.innerHTML = "";
    let new_array = Got_the_data
        .map((item) => {
            return `
            <header>
        <div class="Navigation_bar">
            <div>
                <div>
                    <i class="fa-solid fa-bars" style="cursor: pointer;" ></i>
                </div>
                <div>
                    <i class="fa-regular fa-envelope" style="cursor: pointer;"></i>
                </div>
                <div>
                    <i class="fa-solid fa-house-user" style="cursor: pointer;"></i>
                </div>
                <div>
                    <i class="fas fa-angle-right dropdown" id="arrow1"></i>
                </div>
                <div>
                    <span>${item.space}</span>
                </div>
                <div>
                    <i class="fas fa-angle-right dropdown" id="arrow2"></i>
                </div>
                <div>
                    <span>${item.project}</span>
                </div>
                <div>
                    <i class="fas fa-angle-right dropdown" id="arrow3"></i>
                </div>
                <div>
                    <span>${item.This_week}</span>
                </div>
                <div>
                    <i class="fa-solid fa-thumbtack" style="cursor: pointer;" id="thumbrack"></i>
                </div>
            </div>

            <div>

                <div>
                    <i class="fa fa-search" aria-hidden="true" id="seach_icon"></i>
                    <input type="text" placeholder="Search">
                </div>

                <div>
                    <button class="button_plus">|</button>
                </div>

                <div>
                    <button class="button_grid"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAEtJREFUSEtjZKAxYKSx+QzD0IL/////Rw42RkZGsC9JFYeZgRFEpBqES/0wtoDayZb+yXQ0kmH5ZuCS6WgqGvg4GPr5YOinoiHnAwC4UpAZRy7j/wAAAABJRU5ErkJggg==" /></button>
                </div>

                <div>
                    <button class="button_question"><i class="fa-regular fa-circle-question"></i></button>
                </div>

                <div>
                    <button class="button_profile">${item.Name[0].toUpperCase()}</button>
                </div>

            </div>
        </div>

    </header>
    <!-- ==========================================creating side bar========================= -->
    <div class="side-bar">
        <div class="menu">

            <div class="item" style="visibility: hidden; padding-top: 25px;">

                <a href="#"><i class="fas fa-desktop"></i>Dashboard

                </a>
            </div>

            <div class="item">

                <a class="sub-btn"><i class="fas fa-angle-right dropdown"></i>Tools<i
                        style="margin-left:130px; font-size: 15px; color: rgb(177, 177, 177);"
                        class=" fa-regular fa-plus"></i>
                </a>

                <div class="sub-menu">
                    <a href="#" class="sub-item">No tools</a>

                </div>

            </div>

            <div class="item">

                <a class="sub-btn"><i class="fas fa-angle-right dropdown"></i>Project and folders<i
                        class="fa-regular fa-plus"
                        style="margin-left:43px; font-size: 15px; color: rgb(177, 177, 177);"></i>
                </a>

                <div class="sub-menu">

                    <a class="sub-btn2"><i class="fas fa-angle-right dropdown"
                            style="margin-right: 20px;"></i>${item.project}<i
                            style="margin-left:33px; font-size: 15px; color: rgb(177, 177, 177);"
                            class=" fa-regular fa-plus"></i>
                    </a>

                    <div class="sub-menu">
                        <a href="#" class="sub-item"><i class="fa-solid fa-folder" style="padding-left: 10px;"></i>
                            ${item.Next_month}</a>
                        <a href="#" class="sub-item"><i class="fa-solid fa-folder" style="padding-left: 10px;"></i>
                        ${item.This_week}</a>
                        <a href="#" class="sub-item"><i class="fa-solid fa-folder" style="padding-left: 10px;"></i>
                        ${item.Next_year}</a>
                    </div>
                </div>

            </div>


        </div>

    </div>
    <!-- //====================================creating table==================================== -->
    <div class="table_div">
        <div>
            <h3>${item.project}
            </h3>
        </div>
        <div>
            <div>
                <button><i style="margin-right: 5px" class="fa-solid fa-lock"></i>Share</button>
            </div>
            <div>
                <i class="fa-regular fa-circle-question"></i>
            </div>
            <div><i class="fa-solid fa-ellipsis"></i></div>
        </div>
    </div>
    <div class="table_div2">
        <div>
            <div>
                <i class="fa-solid fa-list-check"></i>
                <a href="#">List</a>
            </div>
            <div>
                <i class="fa-solid fa-chart-simple"></i>
                <a href="#">Board</a>
            </div>
            <div>
                <i class="fa-solid fa-table"></i>
                <a href="#">Table</a>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div>
                <i class="fa-solid fa-chart-bar"></i>
                <a href="#">Gantt Chatt</a>
            </div>
            <div>
                <i class="fa-solid fa-calendar-days"></i>
                <a href="#">Calendar</a>
                <i class="fa-solid fa-plus" style="margin-left: 40px;"></i>
            </div>
        </div>

    </div>
    <hr>
    <nav class="table_div3">
        <ul>
            <li>

                <a href="#"><i class="fa-solid fa-filter" style="padding-right: 7px;"></i>All tasks
                    <i class="fas fa-angle-down dropdown" style="margin-left: 4px;"></i>
                </a>
                <ul>
                    <li><a href="#"><input type="checkbox"> All tasks</a></li>
                    <li><a href="#"><input type="checkbox">All active tasks</a></li>
                    <li><a href="#"><input type="checkbox">My active tasks</a></li>
                </ul>
            </li>

        </ul>

        <ul>
            <li>
                <a href="#">By Priority
                    <i class="fas fa-angle-down dropdown" style="margin-left: 4px;"></i>
                </a>
                <ul>
                    <li><a href="#">Priority</a></li>
                    <li><a href="#">Due Date</a></li>
                    <li><a href="#">Status</a></li>
                    <li><a href="#">Importance</a></li>
                    <li><a href="#">Name</a></li>
                </ul>
            </li>

        </ul>

        <ul>
            <li>
                <a href="#">Expand/Collapse
                    <i class="fas fa-angle-down dropdown" style="margin-left: 4px;"></i>
                </a>
                <ul>
                    <li><a href="#"> Collapse all</a></li>
                    <li><a href="#">Expand to show projects</a></li>
                    <li><a href="#">Expand to show tasks</a></li>
                    <li><a href="#">Expand all</a></li>
                </ul>
            </li>

        </ul>
        <div>|</div>
        <i class="fa-solid fa-arrow-left" style="margin-left: 13px;"></i>
        <i class="fa-solid fa-arrow-right" style="margin-left: 13px;"></i>
    </nav>
    <hr>
    <div class="table_div4">
        <table class="fl-table">
            <thead>
                <tr>
                    <td class="tb_series"><i class="fa-solid fa-gear"></i></td>
                    <td>Name</td>
                    <td>Assignee</td>
                    <td>Status</td>
                    <td>Start Date</td>
                    <td>Due Date</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tb_series">1</td>
                    <td>${item.project}</td>
                    <td></td>
                    <td>New</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="tb_series">2</td>
                    <td>${item.Next_month}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="tb_series">3</td>
                    <td>${item.This_week}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="tb_series">4</td>
                    <td>task 1</td>
                    <td></td>
                    <td>On Hold</td>
                    <td>16/12/22</td>
                    <td>16/12/22</td>
                </tr>
                <tr>
                    <td class="tb_series">5</td>
                    <td>task 2</td>
                    <td></td>
                    <td>In progess</td>
                    <td>16/12/22</td>
                    <td>16/12/22</td>
                </tr>
                <tr>
                    <td class="tb_series">6</td>
                    <td>task 3</td>
                    <td></td>
                    <td>In progess</td>
                    <td>16/12/22</td>
                    <td>16/12/22</td>
                </tr>
                <tr>
                    <td class="tb_series">7</td>
                    <td>${item.Next_year}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            <tbody>
        </table>
    </div>
    <script>
    ${$(document).ready(function () {

                //jquery for toggle sub menus
                $('.sub-btn').click(function () {
                    $(this).next('.sub-menu').slideToggle();
                    $(this).find('.dropdown').toggleClass('rotate');
                });

                $('.sub-btn2').click(function () {
                    $(this).next('.sub-menu').slideToggle();
                    $(this).find('.dropdown').toggleClass('rotate');
                });
            })
                }
</script>
            `;
        })
        .join(" ");

    console.log(new_array);
    body.innerHTML = new_array;

}