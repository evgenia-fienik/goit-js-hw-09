import"./assets/styles-1ce675d0.js";let e={email:"",message:""};document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".feedback-form"),s=a.elements.email,l=a.elements.message;a.querySelector("button[type='submit']"),a.addEventListener("input",function(t){t.target.name==="email"?e.email=t.target.value.trim():t.target.name==="message"&&(e.message=t.target.value.trim()),window.localStorage.setItem("feedback-form-state",JSON.stringify(e))});const m=localStorage.getItem("feedback-form-state");m&&(e=JSON.parse(m),s.value=e.email,l.value=e.message),a.addEventListener("submit",function(t){t.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},s.value="",l.value="")})});
//# sourceMappingURL=commonHelpers2.js.map