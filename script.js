let button = document.querySelector("button");
        let btn = document.querySelector(".c")
        let con =document.querySelector(".container")
        
        function fnClick(event) {
            btn.style.display = "none"
            con.style.height = "180px"
            event.target.innerText = "Show details"
            button.removeEventListener("click",fnClick);
            button.addEventListener("click", onClick);

          }

          function onClick (event) {
              btn.style.display = "block"
              con.style.height = "280px"
              event.target.innerText = "Hide details"
              button.removeEventListener("click", onClick);
              button.addEventListener("click",fnClick)
          }

          button.addEventListener("click", fnClick);