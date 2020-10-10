function emailValidateCheck(email){
    const emailRegexp =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    return emailRegexp.test(email); //불리언으로 값을 전달 할 것이다. 
}

const join = () => {
    const id = document.getElementById("login-id").value;
    const email = document.getElementById("login-email").value;
    const pw_1 = document.getElementById("login-pw-1").value;
    const pw_2 = document.getElementById("login-pw-2").value;

    function _join(id,email,password_1,password_2){
        if(id.length < 5){
            alert("아이디는 5글자 이상 되어야 합니다.");
            return;
        }

        if(!emailValidateCheck(email)){
            alert("이메일을 확인해주세요");
            return;
        }

        if(!password_1 || !password_2){
            alert("비밀번호를 입력해주세요");
            return;
        }

        if(password_1 !== password_2){
            alert("비밀번호가 일치 하지 않습니다.");
            return;
        }
        
        axios.post("http://localhost:3000/service/join",{
            id,
            email,
            password : password_1,
        }).then((res)=>{
            alert(res.data);
            if(res.status === 202){
                const idBox = document.getElementById("login-id");
                idBox.value = "";
                idBox.focus();
            }else if(res.status === 201){
                window.location = "http://localhost:3000"
            }
        })
    }
    _join(id,email,pw_1,pw_2)
}

// axios.get("http://localhost:3000/users/test").then((res)=>{
//     console.log(res);
//     console.log(res.data)
// })
//method get(자원을 요청 : 바디가 없다.) , 
// post(자원을 생성 : 바디가 존재한다.) ,
//  put(자원을 수정 : 바디가 존재), 
// delete(자원을 삭제 : 바디가 없다.), option, header ... 
//4개의 메서드를 이용해서 uri를 작성한다 . restful api 자원의 상태로 인터페이스를 확인하는 방법 .
// axios.get("http://localhost:3000/users/test").then((res)=>{
//     console.log(res);
//     console.log(res.data)
// })
//method get(자원을 요청 : 바디가 없다.) , 
// post(자원을 생성 : 바디가 존재한다.) ,
//  put(자원을 수정 : 바디가 존재), 
// delete(자원을 삭제 : 바디가 없다.), option, header … 
//4개의 메서드를 이용해서 uri를 작성한다 . restful api 자원의 상태로 인터페이스를 확인하는 방법 .