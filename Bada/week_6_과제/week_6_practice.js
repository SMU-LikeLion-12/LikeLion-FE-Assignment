const inputBox = document.getElementById("input_box");
const text = document.getElementById("input_box").value;
var count = 0;


inputBox.addEventListener('keypress', function(event){

    const list = document.getElementById("list");
    const content = document.getElementById("input_box").value;

    if(event.key == 'Enter'){
        event.preventDefault();
        if (content !== "") {
            count = count + 1;
        
            
            const item = document.createElement("li");
            const textSpan = document.createElement('span');
            const checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = "❌";
            

            textSpan.innerHTML = content;
            item.appendChild(checkBox);
            item.appendChild(textSpan); 
            item.appendChild(deleteButton); 
        
            list.appendChild(item);

            document.getElementById("input_box").value = "";

            document.querySelector(".count").textContent = count.toString();

            checkBox.addEventListener("change", () => {
                if (checkBox.checked) {
                    item.classList.add("completed");
                    count = count - 1;
                    document.querySelector(".count").textContent = count.toString();

                } else {
                    item.classList.remove("completed");
                    count = count + 1;
                    document.querySelector(".count").textContent = count.toString();
                }
            });

            deleteButton.addEventListener("click", () => {
                list.removeChild(item);
                if (!checkBox.checked) {                
                count = count - 1;
                    document.querySelector(".count").textContent = count.toString();
                }
            });
        }
    }
});
