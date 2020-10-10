(
    function(){
        document.getElementById("login-button")
        .addEventListener('click',()=>{
            const id = document.getElementById("login-id").value;
            const pw = document.getElementById("login-pw").value;

            if(!id){
                alert("아이디를 입력해주세요");
                return;
            }

            if(!pw){
                alert("비밀번호를 입력해주세요");
                return;
            }

            axios.post('http://localhost:3000/service/login',{
                id,
                pw
            }).then((res) =>{
                alert(res.data);
                
                console.log(res.status)
                if(res.status === 201){
                    window.location = "http://localhost:3000/main"
                }
            })
        })

    }
)();