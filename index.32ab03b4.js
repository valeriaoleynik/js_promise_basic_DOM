var e=document.querySelector(".logo"),n=new Promise(function(n,t){e.addEventListener("click",function(){n("Promise was resolved!")})}),t=new Promise(function(e,n){setTimeout(function(){return n(Error("Promise was rejected!"))},3e3)});n.then(function(e){var n=document.createElement("div");n.className="message",n.innerText=e,document.body.append(n)}).catch(),t.then().catch(function(e){var n=document.createElement("div");n.className="message error-message",n.innerText=e,document.body.append(n)});
//# sourceMappingURL=index.32ab03b4.js.map
