(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const $e=async()=>{const e=document.querySelector("#username").value,t=document.querySelector("#password").value;try{const n=await fetch("/api/users");if(!n.ok)throw new Error("Failed to fetch user data");const a=(await n.json()).data.find(s=>s.email===e&&s.password===t.toString());if(a){a.position==="사장"?(sessionStorage.setItem("userRole","admin"),sessionStorage.setItem("isLoggedIn","true"),window.history.pushState(null,null,"/admin/dashboard")):(sessionStorage.setItem("userRole","user"),sessionStorage.setItem("isLoggedIn","true"),window.history.pushState(null,null,"/user/dashboard")),sessionStorage.setItem("userId",a.id),sessionStorage.setItem("userName",a.name),H();return}else{alert("잘못된 이메일 또는 비밀번호입니다.");return}}catch(n){console.error("Login error:",n),alert("로그인 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");return}},Oe=()=>{sessionStorage.removeItem("userRole"),sessionStorage.removeItem("isLoggedIn"),sessionStorage.removeItem("userId"),sessionStorage.removeItem("userName"),sessionStorage.removeItem("userPosition"),window.history.pushState(null,null,"/"),H()},pe=()=>sessionStorage.getItem("userRole"),nt=()=>sessionStorage.getItem("isLoggedIn")==="true",st=()=>sessionStorage.getItem("userId"),we=e=>{e.innerHTML=`
      <div class="error-404__container">
        <div class="error-404__inner">
          <h1>PAGE NOT FOUND</h1>
          <h4>
            페이지의 주소가 잘못 입력되었거나,<br />
            요청하신 페이지의 주소가 변경 혹은 삭제되어 찾을 수 없습니다.
          </h4>
          <button data-color="positive" data-shape="line">홈으로</button>
        </div>
      </div>
  `,document.querySelector("button").addEventListener("click",()=>{if(pe().includes("user"))history.pushState(null,null,"/user/dashboard"),H();else if(pe().includes("admin"))history.pushState(null,null,"/admin/dashboard"),H();else return})},it=e=>{e.innerHTML=`
      <div id="responsive-nav"></div>
      <div id="container">
        <nav id="nav"></nav>
        <div id="contents"></div>
      </div>
      `},rt="_loginLayout_cfez9_1",lt="_loginContainer_cfez9_11",ct="_loginContainer__form_cfez9_39",dt="_loginBtn_cfez9_61",K={loginLayout:rt,loginContainer:lt,loginContainer__form:ct,loginBtn:dt},_t=e=>{e.innerHTML=`
      <section class="${K.loginLayout}">
      <div class="${K.loginContainer}">
        <img src="images/company_logo_user.png" alt="logo img" />
        <form class="${K.loginContainer__form}">
        <h5>아이디</h5>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디를 입력해주세요."
            data-shape="line"
            autocomplete="off"
            required
          />
        <h5>비밀번호</h5>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            data-shape="line"
            autocomplete="off"
            required
          />
          <button
            id="login__button"
            class="${K.loginBtn}"
            type="button"
            data-shape="block"
            data-color="positive"
          >
            로그인
          </button>
        </form>
      </div>
    </section>
  `,document.querySelector("#login__button").addEventListener("click",$e),document.querySelector(`.${K.loginContainer__form}`).addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),$e())})},pt="_logo_1hpvu_7",ut="_hamburger_1hpvu_17",X={"responsive-nav__container":"_responsive-nav__container_1hpvu_1",logo:pt,hamburger:ut},ht="_h4_14he3_1",mt="_layout_14he3_7",vt="_layout__top_14he3_17",gt="_layout__logo_14he3_25",bt="_layout__nav_14he3_38",yt="_layout__item_14he3_43",ft="_layout__bottom_14he3_44",$t="_open_14he3_103",x={h4:ht,layout:mt,layout__top:vt,layout__logo:gt,layout__nav:bt,layout__item:yt,layout__bottom:ft,"layout--profile":"_layout--profile_14he3_69",open:$t},wt=()=>{const e=document.querySelector(`.${X.hamburger}`),t=document.querySelector(`.${x.layout}`);e&&t?e.addEventListener("click",()=>{t.classList.toggle(`${x.open}`)}):console.error("Element not found:",{hamburgerElement:e,layoutElement:t})},Ct=e=>{e.innerHTML=`
          <div class=${X["responsive-nav__container"]}>
            <a href="/admin/dashboard" class=${X.logo}>
                <img src="images/company_logo_admin.png" />
            </a>
            <button class=${X.hamburger}>&#9776;</button>
          </div>
            `,wt()},Dt="_logo_3owf9_8",St="_hamburger_3owf9_17",ee={"responsive-nav__container":"_responsive-nav__container_3owf9_1",logo:Dt,hamburger:St},Lt="_h4_1xtps_1",Tt="_layout_1xtps_7",kt="_layout__top_1xtps_18",xt="_layout__logo_1xtps_26",Et="_layout__nav_1xtps_39",It="_layout__item_1xtps_44",Ht="_layout__bottom_1xtps_45",qt="_layout__profile_1xtps_67",Mt="_open_1xtps_98",E={h4:Lt,layout:Tt,layout__top:kt,layout__logo:xt,layout__nav:Et,layout__item:It,layout__bottom:Ht,layout__profile:qt,open:Mt},Bt=()=>{const e=document.querySelector(`.${ee.hamburger}`),t=document.querySelector(`.${E.layout}`);e&&t?e.addEventListener("click",()=>{t.classList.toggle(`${E.open}`)}):console.error("Element not found:",{hamburgerElement:e,layoutElement:t})},At=e=>{e.innerHTML=`
          <div class=${ee["responsive-nav__container"]}>
            <a href="/user/dashboard" class=${ee.logo}>
                <img src="images/company_logo_user.png" />
            </a>
            <button class=${ee.hamburger}>&#9776;</button>
          </div>
            `,Bt()},jt=e=>{const t=document.querySelector("[data-nav-name]"),n=document.querySelector("[data-nav-position]");t.textContent=e.name,n.textContent=e.position,sessionStorage.setItem("userPosition",e.position)},Ue=async()=>{const e=sessionStorage.getItem("userId"),t=document.querySelector("[data-nav-name]"),n=document.querySelector("[data-nav-position]");if(sessionStorage.getItem("userName")&&sessionStorage.getItem("userPosition"))t.textContent=sessionStorage.getItem("userName"),n.textContent=sessionStorage.getItem("userPosition");else try{const o=await fetch("/api/users");if(!o.ok)throw new Error("Failed to fetch user data");const s=(await o.json()).data.find(i=>i.id.toString()===e);if(jt(s),!s)throw new Error("User not found")}catch(o){console.error("Error fetching user data:",o),container.innerHTML="<p>사용자 정보를 불러오는 데 실패했습니다.</p>"}},Ft=(e,t)=>{if(!e){console.error("navBar element not found");return}e.innerHTML=`
  <div class="${x.layout}">
    <div class="${x.layout__top}">
      <div class="${x.layout__logo}">
        <a href="/admin/dashboard">
          <img src="images/company_logo_admin.png" />
        <a>
      </div>

    <div class="${x.layout__nav}">
            <a class="${x.layout__item} ${x.h4}" href=${t[0].path}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"
                ></path></svg
              >${t[0].label}
            </a>
            <a class="${x.layout__item} ${x.h4}" href='${t[1].path}'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z"
                ></path></svg
              >${t[1].label}
            </a>
            <a class="${x.layout__item} ${x.h4}" href=${t[2].path}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
                /></svg
              >${t[2].label}
            </a>
            <a class="${x.layout__item} ${x.h4}" href=${t[3].path}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
                ></path></svg
              >${t[3].label}
            </a>
            <a class="${x.layout__item} ${x.h4}" href=${t[4].path}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"
                ></path></svg
              >${t[4].label}
            </a>
          </div>
        </div>

        <!-- 하단 부분 -->
        <div class="${x.layout__bottom} ${x.h4}">
          <div class="${x.layout__item}" href="/">
            <h4><span data-nav-position></span> <span data-nav-name></span><h4>
          </div>
          <a class="${x.layout__item}" href="#" id="logout">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"
              ></path></svg
            >로그아웃
          </a>
        </div>
      </div>
    `,Ue(),document.querySelector("#logout").addEventListener("click",Oe)},Nt=(e,t)=>{if(!e){console.error("navBar element not found");return}sessionStorage.getItem("userName"),e.innerHTML=`
  <div class="${E.layout}">
    <div class="${E.layout__top}">
      <div class="${E.layout__logo}">
        <a href="/user/dashboard">
          <img src="images/company_logo_user.png" />
        <a>
      </div>

    <div class="${E.layout__nav}">
            <a class="${E.layout__item} ${E.h4}" href=${t[0].path}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"
                ></path></svg
              >${t[0].label}
            </a>
            <a class="${E.layout__item} ${E.h4}" href='${t[1].path}'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z"
                ></path></svg
              >${t[1].label}
            </a>
            <a class="${E.layout__item} ${E.h4}" href=${t[2].path}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"
                ></path></svg
              >${t[2].label}
            </a>
            <a class="${E.layout__item} ${E.h4}" href=${t[3].path}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
                ></path></svg
              >${t[3].label}
            </a>
            <a class="${E.layout__item} ${E.h4}" href=${t[4].path}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"
                ></path></svg
              >${t[4].label}
            </a>
          </div>
        </div>

        <!-- 하단 부분 -->
        <div class="${E.layout__bottom} ${E.h4}">
          <div class="${E.layout__item}">
            <h4><span data-nav-position></span> <span data-nav-name></span><h4>
          </div>
          <a class="${E.layout__item}" href="#" id="logout">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"
              ></path></svg
            >로그아웃
          </a>
        </div>
    `,Ue(),document.querySelector("#logout").addEventListener("click",Oe)},Vt="_h5_1514y_2",Pt="_card_1514y_8",Rt="_adminDashboard_1514y_16",Zt="_adminDashboard__container_1514y_22",zt="_adminDashboard__approval_1514y_27",Ot="_dashboardCon_1514y_31",Ut="_adminDashboard__profileCard_1514y_37",Wt="_profileImg_1514y_46",Kt="_infoFirst_1514y_67",Jt="_infoFirst__name_1514y_73",Qt="_infoSecond_1514y_77",Gt="_email_1514y_87",Yt="_emailInfo_1514y_91",Xt="_callInfo_1514y_92",ea="_adminDashboard__today_1514y_97",ta="_adminDashboard__mileage_1514y_105",aa="_mileage__contents_1514y_145",oa="_mileage__header_1514y_149",na="_mileage__row_1514y_150",sa="_mileage__title_1514y_160",ia="_mileage__requester_1514y_168",ra="_userDashboard__approvalFilter_1514y_184",la="_adminDashboard__approvalContainer_1514y_187",ca="_adminDashboard__approvalTitle_1514y_192",da="_approvalTable_1514y_207",_a="_approvalTable__tbody_1514y_210",pa="_noticeTable_1514y_252",ua="_noticeTable__tbody_1514y_267",ha="_noticeResponsive_1514y_334",ma="_adminDashboard__notice_1514y_111",va="_noticeResponsive__attachment_1514y_413",c={h5:Vt,card:Pt,adminDashboard:Rt,adminDashboard__container:Zt,adminDashboard__approval:zt,dashboardCon:Ot,adminDashboard__profileCard:Ut,profileImg:Wt,infoFirst:Kt,infoFirst__name:Jt,infoSecond:Qt,email:Gt,emailInfo:Yt,callInfo:Xt,adminDashboard__today:ea,adminDashboard__mileage:ta,"adminDashboard__approval-title":"_adminDashboard__approval-title_1514y_109","adminDashboard__mileage-title":"_adminDashboard__mileage-title_1514y_110","adminDashboard__notice-title":"_adminDashboard__notice-title_1514y_111","adminDashboard__approval-title--left":"_adminDashboard__approval-title--left_1514y_126","adminDashboard__mileage-title--left":"_adminDashboard__mileage-title--left_1514y_127","adminDashboard__notice-title--left":"_adminDashboard__notice-title--left_1514y_128","adminDashboard__mileage-title--right":"_adminDashboard__mileage-title--right_1514y_134","adminDashboard__approval-title--right":"_adminDashboard__approval-title--right_1514y_138","adminDashboard__notice-title--right":"_adminDashboard__notice-title--right_1514y_140",mileage__contents:aa,mileage__header:oa,mileage__row:na,mileage__title:sa,mileage__requester:ia,"mileage__request-date":"_mileage__request-date_1514y_176",userDashboard__approvalFilter:ra,adminDashboard__approvalContainer:la,adminDashboard__approvalTitle:ca,approvalTable:da,approvalTable__tbody:_a,"no-data-message":"_no-data-message_1514y_245",noticeTable:pa,noticeTable__tbody:ua,noticeResponsive:ha,adminDashboard__notice:ma,noticeResponsive__attachment:va},ga=async()=>{try{const t=await(await fetch("/api/approval")).json();t.status==="OK"?ba(t.data):console.error("Error in Approval DashBoard data:",t.error)}catch(e){console.error("Failed to fetch Approval DashBoard data:",e)}},ba=e=>{const n=e.filter(a=>a.isApprove!==0&&a.isApprove!==1).slice(0,3),o=document.querySelector(`.${c.approvalTable__tbody}`);if(o.innerHTML="",n.length===0){const a=document.createElement("tr");a.className=c["no-data-message"],a.innerHTML=`
        <td>!!</td>
        <td>미처리 전자결재가</td>
        <td>없습니다.</td>
        <td> 미처리 전자결재가 없습니다 </td>`,o.appendChild(a)}else n.forEach(a=>{const s=document.createElement("tr");s.innerHTML=`
        <td>${a.category}</td>
        <td>${a.title}</td>
        <td>${a.submitdate}</td>
        <td>
        ${a.title}<br>
        ${a.user} / ${a.submitdate}</p>
        </td>
    `,o.appendChild(s)})},ya=async()=>{try{const e=await fetch("/api/notices");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();t.status==="OK"?fa(t.data):console.error("Error fetching notices:",t.error)}catch(e){console.error("Failed to fetch notices:",e)}},fa=e=>{const n=e.slice().sort((a,s)=>new Date(s.date)-new Date(a.date)).slice(0,3),o=document.querySelector(`.${c.noticeTable__tbody}`);if(o.innerHTML="",e.length===0){const a=document.createElement("tr"),s=document.createElement("td");s.colSpan=6,s.textContent="공지사항이 없습니다.",s.style.textAlign="center",s.style.padding="20px",a.appendChild(s),o.appendChild(a)}else n.forEach(a=>{const s=document.createElement("tr"),i=a.attachments!==null,l=a.category;let r="";switch(l){case"event":r="이벤트";break;case"mileage":r="마일리지";break;case"education":r="교육";break;case"approval":r="전자결재";break;case"etc":r="기타";break;case"human-resource":r="인사행정";break;default:r="Unknown category.";break}s.innerHTML=`
          <td>${r}</td>
          <td>${a.title}</td>
          <td>${a.author}</td>
          <td>${a.createdAt}</td>
          <td>${i?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':"없음"}</td>
          <td>${a.views}</td>
          <td>
              <p>[${r}] ${a.title}</p>
                <div class="${c.noticeResponsive}">
                    <p>작성자:${a.author} / </p>
                    <p>작성일:${a.createdAt} / </p>
                    <p class="${c.noticeResponsive__attachment}">첨부파일:
                    ${i?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':"없음"}
                    </p>
                </div>
          </td>
    `,o.appendChild(s)})},$a=async()=>{try{const t=await(await fetch("/api/mileage")).json();t.status==="OK"&&wa(t.data)}catch(e){console.error("Failed to fetch mileage data:",e)}},wa=e=>{const t=e.filter(n=>n.isApprove===null);Ca(t)},Ca=e=>{const t=document.querySelector(`.${c.mileage__contents}`);e.forEach((n,o)=>{if(o>2)return;const a=document.createElement("li");a.className=c.mileage__header,a.innerHTML=`
        <div class="${c.mileage__title}">${n.category}</div>
        <div class="${c.mileage__requester}">${n.user}</div>
        <div class="${c["mileage__request-date"]}">${n.date.replaceAll("-",".")}</div>
    `,t.appendChild(a)})},Ce=e=>{const t=document.querySelector("[data-m-name]"),n=document.querySelector("[data-m-position]"),o=document.querySelector("[data-m-email]"),a=document.querySelector("[data-m-phone]"),s=document.querySelector("[data-m-img]");t.innerHTML=e.name,n.innerHTML=e.position,o.innerHTML=e.email,a.innerHTML=e.phone,s.src=e.profileImage;const i=e.phone.replace(/\D/g,"");a.innerHTML=i.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3")},V=()=>{const e=document.createElement("div");e.className="spinner-container";const t=document.createElement("div");return t.className="spinner",e.appendChild(t),e.style.display="none",t.innerHTML=`
              <div class = "spinner__firstRow">
                <svg
                  class = "seed"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"
                />
                </svg>
                <svg
                class = "sprout"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99805 3C9.48787 3 12.3812 5.55379 12.9112 8.8945C14.0863 7.72389 15.7076 7 17.498 7H21.998V9.5C21.998 13.0899 19.0879 16 15.498 16H12.998V21H10.998V13H8.99805C5.13205 13 1.99805 9.86599 1.99805 6V3H5.99805ZM19.998 9H17.498C15.0128 9 12.998 11.0147 12.998 13.5V14H15.498C17.9833 14 19.998 11.9853 19.998 9.5V9ZM5.99805 5H3.99805V6C3.99805 8.76142 6.23662 11 8.99805 11H10.998V10C10.998 7.23858 8.75947 5 5.99805 5Z"
                />
              </svg>
              </div> 

              <div class = "spinner__secondRow">
                <svg
                class = "leaf"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
                />
              </svg>
                <svg
                class = "tree"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 7.26214 17.9831 7.5207 17.9504 7.77457C19.77 8.80413 21 10.7575 21 13C21 16.3137 18.3137 19 15 19H13V22H11V19H8.5C5.46243 19 3 16.5376 3 13.5C3 11.2863 4.30712 9.37966 6.19098 8.50704C6.06635 8.02551 6 7.52039 6 7ZM7.00964 10.3319C5.82176 10.8918 5 12.1008 5 13.5C5 15.433 6.567 17 8.5 17H15C17.2091 17 19 15.2091 19 13C19 11.3056 17.9461 9.85488 16.4544 9.27234L15.6129 8.94372C15.7907 8.30337 16 7.67183 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 8.30783 8.6266 9.46903 9.60019 10.2005L8.39884 11.7995C7.85767 11.3929 7.38716 10.8963 7.00964 10.3319Z"
                />
              </svg>
              </div> 
                `,e.style.display="none",document.body.append(e),{show:()=>{e.style.display="flex"},hide:()=>{e.style.display="none"}}},De=V(),ge=async()=>{try{De.show();const e=st();if(!e)throw new Error("User not logged in");const t=await fetch("/api/users");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const o=(await t.json()).data.find(a=>a.id.toString()===e);if(o)Ce(o);else throw new Error("User not found")}catch(e){console.error("Failed to fetch user data:",e),Ce(null)}finally{De.hide()}},oe=()=>{const e=new Date,t=e.getFullYear(),n=("0"+(e.getMonth()+1)).slice(-2),o=("0"+e.getDate()).slice(-2),a=e.getDay(),i=["일","월","화","수","목","금","토"][a];return`${t}.${n}.${o} (${i})`},be=()=>{const e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds(),a=t<10?`0${t}`:t,s=n<10?`0${n}`:n,i=o<10?`0${o}`:o;return`${a}:${s}:${i}`},Da=e=>{if(!e){console.error("container element not found");return}e.innerHTML=`
  <div class="${c.contents}">
      <h1 class="${c.title}">대시보드</h1>
      <div class="${c.adminDashboard}">
        <div class="${c.adminDashboard__profileCard} ${c.card}">
          <div class="${c.profileImg}">
              <img data-m-img alt="profileimg" />
          </div>
          <div class="${c.info}">
          <h2>Welcome Back,</h2>
          <div class="${c.infoFirst}">
            <h2 data-m-name class="${c.infoFirst__name}"></h2>
            <h4 data-m-position class="${c.infoFirst__position}"></h4>
          </div>
          <div class="${c.infoSecond}">
              <div class="${c.emailInfo}">
              <img src="icons/email.svg" alt="email" />
              <h4 data-m-email class="${c.email}"></h4>
              </div>
              <div class="${c.callInfo}">
              <img src="icons/call.svg" alt="call" />
              <h4 data-m-phone class="${c.call}"></h4>
            </div>
          </div>
        </div>
      </div>
      <div class="${c.adminDashboard}">
      <div class="${c.adminDashboard__time}">
        <h3 class="${c.adminDashboard__today}">c</h3>
      </div>

        <div class="${c.adminDashboard__container}">
          <div class="${c.adminDashboard__approval} ${c.card}">
            <div class="${c.userDashboard__approvalContainer}">
              
              <div class="${c["adminDashboard__approval-title"]}">
                <div class="${c["adminDashboard__approval-title--left"]}">
                  <h2>전자결재</h2>
                  <h4>미처리 결재만 보여집니다.</h4>
                </div>
                <h4 class="${c["adminDashboard__approval-title--right"]}">
                  <a href="/admin/approval">전자결재 페이지로 이동</a>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.78112 8.00047L5.48126 4.70062L6.42408 3.75781L10.6667 8.00047L6.42408 12.2431L5.48126 11.3003L8.78112 8.00047Z"
                    />
                  </svg>
                </h4>
              </div>

            </div>
            <table class="${c.approvalTable}">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>제목</th>
                  <th>신청일</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody class="${c.approvalTable__tbody}"></tbody>
            </table>
          </div>
        </div>


        <div class="${c.adminDashboard__mileage} ${c.card}">
          <div class="${c["adminDashboard__mileage-title"]}">
            <div class="${c["adminDashboard__mileage-title--left"]}">
              <h2>마일리지</h2>
              <h4>미확인 신청 내역만 보여집니다.</h4>
            </div>
            <h4 class="${c["adminDashboard__mileage-title--right"]}">
              <a href="/admin/mileage">마일리지 페이지로 이동</a>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.78112 8.00047L5.48126 4.70062L6.42408 3.75781L10.6667 8.00047L6.42408 12.2431L5.48126 11.3003L8.78112 8.00047Z"
                />
              </svg>
            </h4>
          </div>
          <ul class="${c.mileage__contents} ${c.h5}">
            <li class="${c.mileage__header}">
              <div class="${c.mileage__title}">제목</div>
              <div class="${c.mileage__requester}">요청자</div>
              <div class="${c["mileage__request-date"]}">요청일</div>
            </li>
          </ul>
        </div>


        <div class="${c.adminDashboard__notice} ${c.card}">
          <div class="${c["adminDashboard__notice-title"]}">
              <div class="${c["adminDashboard__notice-title--left"]}">
                <h2>공지사항</h2>
                <h4>최근 3개만 보여집니다.</h4>
              </div>
              <h4 class="${c["adminDashboard__notice-title--right"]}">
                <a href="/admin/notices">공지사항 페이지로 이동</a>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78112 8.00047L5.48126 4.70062L6.42408 3.75781L10.6667 8.00047L6.42408 12.2431L5.48126 11.3003L8.78112 8.00047Z"
                  />
                </svg>
              </h4>
            </div>
            <table class="${c.noticeTable}">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>첨부파일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody class="${c.noticeTable__tbody}"></tbody>
            </table>  
        </div>
      </div>
    </div>`,$a(),ga(),ya(),ge();const t=oe();document.querySelector(`.${c.adminDashboard__today}`).textContent=t},Sa="_userDashboard_cn9sy_3",La="_userDashboard__attendance_cn9sy_9",Ta="_card_cn9sy_15",ka="_dashboardCon_cn9sy_21",xa="_userDashboard__profileCard_cn9sy_27",Ea="_profileImg_cn9sy_36",Ia="_infoFirst_cn9sy_57",Ha="_infoFirst__name_cn9sy_63",qa="_infoSecond_cn9sy_67",Ma="_email_cn9sy_77",Ba="_emailInfo_cn9sy_81",Aa="_callInfo_cn9sy_82",ja="_userDashboard__approvalFilter_cn9sy_89",Fa="_userDashboard__approvalContainer_cn9sy_93",Na="_userDashboard__approvalTitle_cn9sy_99",Va="_approvalTable_cn9sy_109",Pa="_approvalTable__tbody_cn9sy_116",Ra="_userDashboard__notice_cn9sy_174",Za="_userDashboard__noticeContainer_cn9sy_180",za="_userDashboard__noticeTitle_cn9sy_186",Oa="_noticeTable_cn9sy_196",Ua="_userDashboard__noticeRight_cn9sy_203",Wa="_noticeTable__tbody_cn9sy_218",Ka="_noticeResponsive_cn9sy_263",Ja="_dashboard__attachments_cn9sy_268",Qa="_userDashboard__todayAttendance_cn9sy_273",Ga="_userDashboard__todayAttendanceWrap_cn9sy_280",Ya="_userDashboard__stamp_cn9sy_287",Xa="_userDashboard__today_cn9sy_273",eo="_userDashboard__state_cn9sy_317",to="_userDashboard__attendanceHistory_cn9sy_323",ao="_userDashboard__attendanceTime_cn9sy_329",oo="_userDashboard__todayTag_cn9sy_336",no="_recordStartTimeBtn_cn9sy_343",so="_recordEndTimeBtn_cn9sy_344",io="_userDashboard__currentTime_cn9sy_350",d={userDashboard:Sa,userDashboard__attendance:La,card:Ta,dashboardCon:ka,userDashboard__profileCard:xa,profileImg:Ea,infoFirst:Ia,infoFirst__name:Ha,infoSecond:qa,email:Ma,emailInfo:Ba,callInfo:Aa,userDashboard__approvalFilter:ja,userDashboard__approvalContainer:Fa,userDashboard__approvalTitle:Na,approvalTable:Va,approvalTable__tbody:Pa,"no-data-message":"_no-data-message_cn9sy_158","userDashboard__approval-title--right":"_userDashboard__approval-title--right_cn9sy_163",userDashboard__notice:Ra,userDashboard__noticeContainer:Za,userDashboard__noticeTitle:za,noticeTable:Oa,userDashboard__noticeRight:Ua,noticeTable__tbody:Wa,noticeResponsive:Ka,dashboard__attachments:Ja,userDashboard__todayAttendance:Qa,userDashboard__todayAttendanceWrap:Ga,userDashboard__stamp:Ya,userDashboard__today:Xa,userDashboard__state:eo,userDashboard__attendanceHistory:to,userDashboard__attendanceTime:ao,userDashboard__todayTag:oo,recordStartTimeBtn:no,recordEndTimeBtn:so,userDashboard__currentTime:io},ro=async()=>{try{const e=await fetch("/api/notices");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();t.status==="OK"?lo(t.data):console.error("Error fetching notices:",t.error)}catch(e){console.error("Failed to fetch notices:",e)}},lo=e=>{const n=e.slice().sort((a,s)=>new Date(s.date)-new Date(a.date)).slice(0,3),o=document.querySelector(`.${d.noticeTable__tbody}`);if(o.innerHTML="",e.length===0){const a=document.createElement("tr"),s=document.createElement("td");s.colSpan=6,s.textContent="공지사항이 없습니다.",s.style.textAlign="center",s.style.padding="20px",a.appendChild(s),o.appendChild(a)}else n.forEach(a=>{const s=document.createElement("tr"),i=a.attachments!==null,l=a.category;let r="";switch(l){case"event":r="이벤트";break;case"mileage":r="마일리지";break;case"education":r="교육";break;case"approval":r="전자결재";break;case"etc":r="기타";break;case"human-resource":r="인사행정";break;default:r="Unknown category.";break}s.innerHTML=`
          <td>${r}</td>
          <td>${a.title}</td>
          <td>${a.author}</td>
          <td>${a.createdAt}</td>
          <td>${i?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':"없음"}</td>
          <td>${a.views}</td>
          <td>
              <p>[${r}] ${a.title}</p>
                <div class="${d.noticeResponsive}">
                    <p>작성자:${a.author} / </p>
                    <p>작성일:${a.createdAt} / </p>
                    <p class="${d.dashboard__attachments}">첨부파일:
                    ${i?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':"없음"}
                    </p>
                </div>
          </td>
    `,o.appendChild(s)})},co=async()=>{try{const t=await(await fetch("/api/approval")).json();t.status==="OK"?(Se(t.data),document.querySelector("#approvalFilter").addEventListener("change",()=>{Se(t.data)})):console.error("Error in Approval DashBoard data:",t.error)}catch(e){console.error("Failed to fetch Approval DashBoard data:",e)}},Se=e=>{const n=document.querySelector("#approvalFilter").value;let o;switch(n){case"진행중":o=e.filter(i=>i.isApprove!==0&&i.isApprove!==1&&i.user===sessionStorage.getItem("userName"));break;case"승인":o=e.filter(i=>i.isApprove===1&&i.user===sessionStorage.getItem("userName"));break;case"반려":o=e.filter(i=>i.isApprove===0&&i.user===sessionStorage.getItem("userName"));break;default:o=e}const a=o.slice(0,3),s=document.querySelector(`.${d.approvalTable__tbody}`);if(s.innerHTML="",a.length===0){const i=document.createElement("tr");i.className=d["no-data-message"],i.innerHTML=`
        <td>!!</td>
        <td>전자결재 내역이</td>
        <td>없습니다.</td>
        <td> 전자결재 내역이 없습니다 </td>`,s.appendChild(i)}else a.forEach(i=>{const l=document.createElement("tr");l.innerHTML=`
        <td>${i.category}</td>
        <td>${i.title}</td>
        <td>${i.submitdate}</td>
        <td>
            ${i.title}<br>
            거절사유 : ${i.refusereason}<br>
            ${i.submitdate}
        </td>
    `,s.appendChild(l)})},We=()=>{const e=document.getElementById("category"),t=document.querySelector(".approval-data__container");e.addEventListener("change",function(){const n=this.value;n==="반차"||n==="조퇴"?t.innerHTML=`
      <input data-approvalstart-day type="date" id="startDate"/>
        <select data-a-select name="ampm" id="ampm" required>
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
        <select data-a-select name="time" id="detailtime" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>          
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>          
          <option value="11">11</option>
          <option value="12">12</option>
        </select>`:t.innerHTML=`
          <input data-approvalstart-day type="date" id="startDate"/>
          <span> - </span>
          <input data-approvalend-day type="date" id="endDate"/>`})},Ke=()=>{const e=()=>{const n=document.querySelectorAll("[data-time-element]");n&&n.forEach(o=>o.textContent=be())};return e(),setInterval(e,1e3)},te=()=>{const e=document.querySelector(`.${d.recordStartTimeBtn}`),t=document.querySelector(`.${d.recordEndTimeBtn}`),n=document.querySelector(`.${d.userDashboard__today}`),o=document.querySelector(`.${d.userDashboard__todayTag}`),a=document.querySelector(`.${d.userDashboard__attendanceTime} h3`),s={get:p=>localStorage.getItem(p),set:(p,$)=>localStorage.setItem(p,$),remove:p=>localStorage.removeItem(p),clear:()=>localStorage.clear()},i={disable:(p,$)=>{p.disabled=!0,p.style.pointerEvents="none",p.style.opacity="0.5",p.removeAttribute("data-modal-target"),p.querySelector("h2").textContent=$||"-"},enable:(p,$)=>{p.disabled=!1,p.style.pointerEvents="auto",p.style.opacity="1",p.setAttribute("data-modal-target",$),p.querySelector("h2").textContent="-"}},l=()=>{const p=s.get("isCheckedIn")==="true",$=s.get("isCheckedOut")==="true";p&&!$?(o.textContent="근무 중",o.style.backgroundColor="#40b883"):$?(o.textContent="퇴근",o.style.backgroundColor="#212635"):o.textContent="출근 전"},r=()=>{const p=s.get("isCheckedIn")==="true",$=s.get("isCheckedOut")==="true";p&&!$?(i.disable(e,s.get("checkInTime")),i.enable(t,"#modal-dashboard_2")):p?$&&(i.disable(e,s.get("checkInTime")),i.disable(t,s.get("checkOutTime"))):(i.enable(e,"#modal-dashboard_1"),i.disable(t)),l()},m=()=>{const p=s.get("checkInTime"),$=s.get("checkOutTime");if(p&&$){const q=new Date(`1970-01-01T${p}`);return(new Date(`1970-01-01T${$}`)-q)/(1e3*60*60)}return 0},h=()=>{let p=parseInt(s.get("weeklyWorkHours")||"8");p+=Math.round(m()),s.set("weeklyWorkHours",p.toString()),a.textContent=`총 ${p}시간 근무`},g=p=>{const $=be();p?(s.set("checkInTime",$),s.set("isCheckedIn","true"),Ke()):(s.set("checkOutTime",$),s.set("isCheckedOut","true"),h()),r()},C=()=>{var p,$;(p=document.querySelector("#checkInBtn"))==null||p.addEventListener("click",()=>g(!0)),($=document.querySelector("#checkOutBtn"))==null||$.addEventListener("click",()=>g(!1))},I=()=>{h(),s.remove("checkInTime"),s.remove("checkOutTime"),s.remove("isCheckedIn"),s.remove("isCheckedOut"),r()},M=()=>{const p=oe(),$=s.get("currentDate");p!==$&&(n.textContent=p,s.set("currentDate",p),I(),new Date().getDay()===1&&(s.set("weeklyWorkHours","8"),a.textContent="총 8시간 근무"))};(()=>{const p=oe();n.textContent=p,s.set("currentDate",p),M(),r(),C();const $=parseInt(s.get("weeklyWorkHours")||"8");a.textContent=`총 ${$}시간 근무`,setInterval(M,6e4)})()},_o="_contents_11t90_1",po="_content__row_11t90_9",uo="_content__selectboxrow_11t90_17",ho="_paymentRequest_11t90_24",mo="_active_11t90_61",u={contents:_o,content__row:po,content__selectboxrow:uo,paymentRequest:ho,"approval-approve__tabs":"_approval-approve__tabs_11t90_43","approval-approve__tab":"_approval-approve__tab_11t90_43",active:mo,"active-undetermined":"_active-undetermined_11t90_76","active-approved":"_active-approved_11t90_80","active-rejected":"_active-rejected_11t90_84","approval-list":"_approval-list_11t90_88","approval-table":"_approval-table_11t90_97","approval-table__thead":"_approval-table__thead_11t90_110","approval-list__row":"_approval-list__row_11t90_136","approval-list__table":"_approval-list__table_11t90_150","approval-list__tbody":"_approval-list__tbody_11t90_151","approval-list__category":"_approval-list__category_11t90_155","approval-list__title":"_approval-list__title_11t90_158","approval-list__submitdate":"_approval-list__submitdate_11t90_162","approval-list__meida":"_approval-list__meida_11t90_165","approval-tr__date":"_approval-tr__date_11t90_168"},vo="_pagination_syljj_1",go="_pageNumber__btn_syljj_9",bo="_active_syljj_13",ae={pagination:vo,pageNumber__btn:go,active:bo},ue=5,Le=5;let Z=1,Q=0;const J=(e,t,n)=>{e<1?e=1:e>Q?e=Q:Z=e,R(t,n)},yo=(e,t)=>{const n=(Z-1)*ue,o=n+ue,a=e.slice(n,o);t(a)},fo=(e,t)=>{Q=Math.ceil(e.length/ue);const n=document.getElementById("pagination");n.className=`${ae.pagination}`,n.innerHTML="";const o=(i,l,r="")=>{const m=document.createElement("button");return m.innerHTML=i,m.className=`${ae.pageNumber__btn} ${r}`,m.onclick=l,m};n.appendChild(o("&laquo;",()=>J(1,e,t))),n.appendChild(o("&lt;",()=>J(Z-1,e,t)));const a=Math.max(1,Z-Math.floor(Le/2)),s=Math.min(Q,a+Le-1);for(let i=a;i<=s;i++){const l=i===Z?ae.active:"";n.appendChild(o(i,()=>J(i,e,t),l))}n.appendChild(o("&gt;",()=>J(Z+1,e,t))),n.appendChild(o("&raquo;",()=>J(Q,e,t)))},R=(e,t)=>{yo(e,t),fo(e,t)},ne=()=>{Z=1},se=()=>({modal_id:"approval_1",header:"결재 신청",content:`
    <div class="approval-modalbox__form">
      <label for="category"><h4>카테고리</h4></label>
      <select data-a-select name="approvalcategory" id="category" required>
        <option value="반차">반차</option>
        <option value="연차">연차</option>
        <option value="조퇴">조퇴</option>
        <option value="기타">기타</option>
      </select>
      <label for="title"><h4>제목</h4></label>
      <input data-a-title data-shape='line' type="text" id="title" placeholder="내용을 입력해 주세요" />
      <label for="startDate"><h4>날짜</h4></label>
      <div class="approval-data__container">
        <input data-approvalstart-day type="date" id="startDate"/>
        <select data-a-select name="ampm" id="ampm" required>
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
        <select data-a-select name="time" id="detailtime" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>          
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>          
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <label for="description"><h4>사유작성</h4></label>
        <textarea data-a-reason data-shape='transparent'
          id="description"
          placeholder="내용을 입력해 주세요"
          maxlength="100"
        ></textarea>
      <button data-approvaladd-btn class="modal-submit__btn" id="submitBtn">신청하기</button>
    </div>`}),$o=e=>({modal_id:`approvaluser_${e.id}`,header:`${e.title}`,content:`
    <div class="modal-box__form">
      <div class="form-group">
        <h5>카테고리</h5>
        <input data-shape="line" type="text" value='${e.category}' readonly />
      </div>

      <div class="form-group">
        <h5>신청날짜</h5>
        <input data-shape="line" type="text" value='${e.startdate} - ${e.enddate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청자</h5>
        <input data-shape="line" type="text" value='${e.user}' readonly />
      </div>

      <div class="form-group">
        <h5>신청일자</h5>
        <input data-shape="line" type="text" value='${e.submitdate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청사유</h5>
        <input data-shape="line" type="text" value='${e.submitreason}' readonly />
      </div>
            
      <div class="form-group">
        <h5>거절사유</h5>
        <input data-shape="line" type="text" value='${e.refusereason}' readonly />
      </div>
    </div>`}),wo=e=>({modal_id:`approvaluserfalse_${e.id}`,header:`${e.title}`,content:`
    <div class="modal-box__form">
      <div class="form-group">
        <h5>카테고리</h5>
        <input data-shape="line" type="text" value='${e.category}' readonly />
      </div>

      <div class="form-group">
        <h5>신청날짜</h5>
        <input data-shape="line" type="text" value='${e.startdate} - ${e.enddate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청자</h5>
        <input data-shape="line" type="text" value='${e.user}' readonly />
      </div>

      <div class="form-group">
        <h5>신청일자</h5>
        <input data-shape="line" type="text" value='${e.submitdate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청사유</h5>
        <input data-shape="line" type="text" value='${e.submitreason}' readonly />
      </div>
    </div>`}),Je=e=>{const t=document.querySelector(`.${u["approval-list"]}`);if(t.innerHTML="",e.length===0){const n=document.createElement("p");n.textContent="전자결재 내역이 없습니다",n.className=u["no-data-message"],t.appendChild(n)}else{const n=document.createElement("table");n.className=u["approval-list__table"];const o=document.createElement("tbody");o.className=u["approval-list__tbody"],n.appendChild(o),e.forEach(a=>{const s=document.createElement("tr");s.className=u["approval-list__row"],s.classList.add("open-modal"),a.isApprove===0?s.setAttribute("data-modal-target",`#modal-approvaluser_${a.id}`):s.setAttribute("data-modal-target",`#modal-approvaluserfalse_${a.id}`),s.innerHTML=`
      <td class="${u["approval-list__category"]}">${a.category}</td>
      <td class="${u["approval-list__title"]}">${a.title}</td>
      <td class="${u["approval-list__submitdate"]}">${a.submitdate}</td>
      <td class="${u["approval-list__meida"]}">
        <p>[${a.startdate} ~ ${a.enddate}] ${a.title}</p><br>
        <p>반려사유:${a.refusereason}</p><br>
        <p class="${u["approval-tr__date"]}">${a.submitdate}</p>
      </td>
    `,o.appendChild(s)}),t.appendChild(n),e.forEach(a=>{const s=$o(a);N(s.modal_id,s.header,s.content)}),e.forEach(a=>{const s=wo(a);N(s.modal_id,s.header,s.content)})}},Co=e=>{const t=document.querySelector(`.${u["approval-approve__tabs"]}`),n=document.querySelector("#filter"),o=document.querySelector("#filter_date");let a=null,s="all",i="latest",l=e.filter(r=>a===null?r.isApprove!==0&&r.isApprove!==1&&r.user===sessionStorage.getItem("userName"):r.isApprove===(a?1:0)&&r.user===sessionStorage.getItem("userName"));document.getElementById("undetermined").classList.add(u.active),R(l,Je),t.addEventListener("click",r=>{const m=r.target.id;if(document.querySelectorAll(`.${u["approval-approve__tab"]}`).forEach(h=>{h.classList.remove(u.active)}),m==="undetermined")r.target.classList.add(u.active),a=null;else if(m==="approved")r.target.classList.add(u.active),a=!0;else if(m==="rejected")r.target.classList.add(u.active),a=!1;else return;ne(),ie(e,a,s,i)}),n.addEventListener("change",r=>{s=r.target.value,ie(e,a,s,i)}),o.addEventListener("change",r=>{i=r.target.value,ie(e,a,s,i)})},ie=(e,t,n,o)=>{let a=e.filter(s=>t===null?s.isApprove!==0&&s.isApprove!==1&&s.user===sessionStorage.getItem("userName"):s.isApprove===(t?1:0)&&s.user===sessionStorage.getItem("userName"));n!=="all"&&(a=a.filter(s=>s.category===n)),o==="latest"?a.sort((s,i)=>new Date(i.submitdate)-new Date(s.submitdate)):o==="old"&&a.sort((s,i)=>new Date(s.submitdate)-new Date(i.submitdate)),R(a,Je)},Te=V(),Qe=async()=>{try{Te.show();const t=await(await fetch("/api/approval")).json();console.log("Fetched approval data:",t),t.status==="OK"?Co(t.data):console.error("Error in Approval data:",t.error)}catch(e){console.error("Failed to fetch Approval data:",e)}finally{Te.hide()}},Do=()=>{const e=document.querySelector("[data-approvaladd-btn]"),t=document.querySelector(".modal-box.active"),n=document.querySelector("#modal__background"),o=async a=>{a.preventDefault();const s=document.querySelector("[data-a-title]"),i=document.querySelector("select[name='approvalcategory']"),l=document.querySelector("[data-a-reason]"),r=document.querySelector("[data-approvalstart-day]");let m;if(i.value==="반차"||i.value==="조퇴"){const g=document.querySelector("select[name='ampm']");m=`${document.querySelector("select[name='time']").value}:00 ${g.value}`}else m=document.querySelector("[data-approvalend-day]").value;const h=new FormData;h.append("user",sessionStorage.getItem("userName")),h.append("title",s.value),h.append("category",i.value),h.append("startdate",r.value),h.append("enddate",m),h.append("submitreason",l.value);try{const g=await fetch("/api/approval",{method:"POST",body:h});if(!g.ok){const I=await g.text();throw new Error(`HTTP error! status: ${g.status}, message: ${I}`)}const C=await g.json();C.status==="OK"?(alert("전자결재가 성공적으로 등록되었습니다."),t&&t.classList.contains("active")&&t.classList.remove("active"),n&&n.classList.contains("active")&&n.classList.remove("active"),e.removeEventListener("click",o),Qe()):alert(`전자결재 등록에 실패했습니다: ${C.error||"알 수 없는 오류"}`)}catch(g){console.error("Failed to register approval:",g),alert(`전자결재 등록 중 오류가 발생했습니다: ${g.message}`)}};e.addEventListener("click",o)},So=async e=>{try{return await(await fetch("/api/mileage/apply",{method:"POST",body:e})).json()}catch(t){throw console.error("Error submitting mileage application:",t),t}},Lo="_mileage__filter_1f9tp_87",To="_mileage__contents_1f9tp_166",ko="_seed_1f9tp_1",xo="_sprout_1f9tp_1",Eo="_leaf_1f9tp_1",Io="_tree_1f9tp_1",Ho="_h5_1f9tp_207",qo="_active_1f9tp_278",v={"mileage-contents":"_mileage-contents_1f9tp_1","mileage-score":"_mileage-score_1f9tp_10","mileage-score__left":"_mileage-score__left_1f9tp_21","mileage-icon":"_mileage-icon_1f9tp_26","mileage-score__right":"_mileage-score__right_1f9tp_35","mileage-score__detail":"_mileage-score__detail_1f9tp_46","mileage-score__message":"_mileage-score__message_1f9tp_51","mileage-approve":"_mileage-approve_1f9tp_56","mileage-approve__tabs":"_mileage-approve__tabs_1f9tp_63","mileage-approve__tab":"_mileage-approve__tab_1f9tp_63","mileage-approve__save-list":"_mileage-approve__save-list_1f9tp_78","mileage-approve__request":"_mileage-approve__request_1f9tp_82",mileage__filter:Lo,"mileage-list":"_mileage-list_1f9tp_113","mileage-list__item":"_mileage-list__item_1f9tp_123","mileage-list__title":"_mileage-list__title_1f9tp_153","modal-1":"_modal-1_1f9tp_1","modal-box__content":"_modal-box__content_1f9tp_162",mileage__contents:To,"mileage-standard":"_mileage-standard_1f9tp_173","mileage-standard__icon":"_mileage-standard__icon_1f9tp_178",seed:ko,sprout:xo,leaf:Eo,tree:Io,h5:Ho,"mileage-standard__description":"_mileage-standard__description_1f9tp_214","modal-box__form":"_modal-box__form_1f9tp_226","modal-box__button":"_modal-box__button_1f9tp_254",active:qo,"active-undetermined":"_active-undetermined_1f9tp_293","active-approved":"_active-approved_1f9tp_297","active-rejected":"_active-rejected_1f9tp_301","mileage-approve__btns":"_mileage-approve__btns_1f9tp_370"},he=e=>{const t=document.querySelector("#total-item");t.textContent=`${e.length}`;const n=document.querySelector(`.${v["mileage-list"]}`);n.innerHTML="",e.forEach(o=>{const a=document.createElement("div");a.className=v["mileage-list__item"],a.style.backgroundImage=`url(${o.image})`,a.innerHTML=`<div class="${v["mileage-list__title"]}">
      <h3>${o.category}</h3>
      <h5>${o.date}</h5>
      </div>`,n.appendChild(a)})},Mo=e=>{const t=document.querySelector(`.${v["mileage-approve__tabs"]}`);let n=null,o=e.filter(a=>a.user===sessionStorage.getItem("userName")&&a.isApprove===n);document.getElementById("undetermined").classList.add(v.active),he(o),ke(o),t.addEventListener("click",a=>{const s=a.target.id;if(document.querySelectorAll(`.${v["mileage-approve__tab"]}`).forEach(i=>{i.classList.remove(v.active)}),s==="undetermined")a.target.classList.add(v.active),n=null;else if(s==="approved")a.target.classList.add(v.active),n=1;else if(s==="rejected")a.target.classList.add(v.active),n=0;else return;o=e.filter(i=>i.isApprove===n&&i.user===sessionStorage.getItem("userName")),he(o),ke(o)})},ke=e=>{const t=document.querySelector("#filter");t.addEventListener("change",()=>{let n=e.slice();t.value==="latest"?n.sort((o,a)=>new Date(a.date)-new Date(o.date)):t.value==="old"&&n.sort((o,a)=>new Date(o.date)-new Date(a.date)),he(n)})},Bo=e=>{const t=document.querySelector("#total-mileage-score"),n=document.querySelector("#total-mileage-text"),o=document.querySelector("#total-mileage-icon"),s=e.filter(l=>l.user===sessionStorage.getItem("userName")&&l.isApprove==1).reduce((l,r)=>l+r.score,0);t.textContent=s;let i="";switch(s<=10?i="seed":s>10&&s<=30?i="sprout":s>30&&s<50?i="leaf":s>=50?i="tree":i="seed",i){case"seed":n.textContent="씨앗 단계에요. 이제 시작이네요 :)",o.innerHTML=`
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"
                />
                </svg>`,o.classList.add("seed");break;case"sprout":n.textContent="새싹 단계에요. 조금만 더 힘내보세요 :)",o.innerHTML=`<svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99805 3C9.48787 3 12.3812 5.55379 12.9112 8.8945C14.0863 7.72389 15.7076 7 17.498 7H21.998V9.5C21.998 13.0899 19.0879 16 15.498 16H12.998V21H10.998V13H8.99805C5.13205 13 1.99805 9.86599 1.99805 6V3H5.99805ZM19.998 9H17.498C15.0128 9 12.998 11.0147 12.998 13.5V14H15.498C17.9833 14 19.998 11.9853 19.998 9.5V9ZM5.99805 5H3.99805V6C3.99805 8.76142 6.23662 11 8.99805 11H10.998V10C10.998 7.23858 8.75947 5 5.99805 5Z"
                />
              </svg>`,o.classList.add("sprout");break;case"leaf":n.textContent="잎새 단계에요. 당신은 지구 지킴이 :)",o.innerHTML=`<svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
                />
              </svg>`,o.classList.add("leaf");break;case"tree":n.textContent="나무 단계에요. 지구 마스터 :)",o.innerHTML=`<svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 7.26214 17.9831 7.5207 17.9504 7.77457C19.77 8.80413 21 10.7575 21 13C21 16.3137 18.3137 19 15 19H13V22H11V19H8.5C5.46243 19 3 16.5376 3 13.5C3 11.2863 4.30712 9.37966 6.19098 8.50704C6.06635 8.02551 6 7.52039 6 7ZM7.00964 10.3319C5.82176 10.8918 5 12.1008 5 13.5C5 15.433 6.567 17 8.5 17H15C17.2091 17 19 15.2091 19 13C19 11.3056 17.9461 9.85488 16.4544 9.27234L15.6129 8.94372C15.7907 8.30337 16 7.67183 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 8.30783 8.6266 9.46903 9.60019 10.2005L8.39884 11.7995C7.85767 11.3929 7.38716 10.8963 7.00964 10.3319Z"
                />
              </svg>`,o.classList.add("tree");break;default:n.textContent="씨앗 단계에요. 이제 시작이네요 :)",o.innerHTML=`<svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path>
                  d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
                />
              </svg>`}},xe=V(),Ge=async()=>{try{xe.show();const e=await fetch("/api/mileage");if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();t.status==="OK"?(Mo(t.data),Bo(t.data)):console.error("Error fetching mileage data:",t.error)}catch(e){console.error("Error fetching mileage data:",e)}finally{xe.hide()}},me=()=>{const e=document.querySelector(".modal-box__button");let t=!1;const n=async o=>{if(o.preventDefault(),t)return;t=!0,e.disabled=!0;const a=document.getElementById("environment-category").value,s=document.getElementById("score").value,i=document.getElementById("mileage-date").value,l=document.getElementById("mileage-image").files[0];if(!a||!s||!i||!l){alert("모든 항목을 입력해주세요."),t=!1,e.disabled=!1;return}const r=new FormData;r.append("user",sessionStorage.getItem("userName")),r.append("category",a),r.append("score",s),r.append("date",i),r.append("image",l);try{(await So(r)).status==="OK"&&(alert("마일리지 신청이 완료되었습니다."),document.querySelector(".modal-box.active").classList.remove("active"),document.querySelector("#modal__background").classList.remove("active"),Ge())}catch{alert("마일리지 신청 중 오류가 발생했습니다.")}finally{t=!1,e.disabled=!1}};e.removeEventListener("click",n),e.addEventListener("click",n)},Ao=e=>{const t=document.querySelector("#contents"),n=document.querySelector("#modal__background")||document.createElement("div");t.addEventListener("click",o=>{if(o.target.closest(".open-modal")){const s=o.target.closest(".open-modal").dataset.modalTarget,i=document.querySelector(s);if(i&&!i.classList.contains("active"))switch(i.classList.add("active"),n.classList.add("active"),e&&e.name){case"approvalType":We(),Do();break;case"renderTime":Ke(),te();break;case"handleMileageSubmit":me();break}}else if(o.target.closest(".close-modal")||o.target===n||o.target.closest("#checkInBtn")||o.target.closest("#checkOutBtn")){const a=document.querySelector(".modal-box.active");a&&a.classList.contains("active")&&(a.classList.remove("active"),n.classList.remove("active"))}})},N=(e,t,n,o=null)=>{const a=document.querySelector("#contents"),s=`
    <div id="modal-${e}" class="modal-box">
      <div class="modal-box__container">
        <div class="modal-box__header">
          <h2>${t}</h2>
          <img
            class="close-modal"
            src="icons/close.svg"
            alt="close-modal"
            width="24"
            height="24"
          />
        </div>
        <div class="modal-box__content">${n}</div>
      </div>
    </div>
    <div id="modal__background"></div>
  `,i=document.createElement("div");i.innerHTML=s,a.appendChild(i),Ao(o)},jo="_checkTimeModal_tabkc_6",Fo={"modal-dashboard_1":"_modal-dashboard_1_tabkc_1","modal-box__container":"_modal-box__container_tabkc_1","modal-dashboard_2":"_modal-dashboard_2_tabkc_1",checkTimeModal:jo},U=e=>{const t=e==="in";return{modal_id:t?"dashboard_1":"dashboard_2",header:t?"출근":"퇴근",content:`
      <div class="${Fo.checkTimeModal}">
        <h4>${oe()}</h4>
        <span data-time-element>${be()}</span>
        <h3>${t?"출근":"퇴근"}하시겠습니까?</h3>
        <button id="${t?"checkInBtn":"checkOutBtn"}" data-shape="block" data-color="positive">
          ${t?"출근":"퇴근"}하기
        </button>
      </div>
    `}},No=e=>{e.innerHTML=`
    <div class="${d.dashboardCon}">
        <!-- 페이지 타이틀 -->
        <h1>대시보드</h1>
        <div class="${d.userDashboard}">
          <div class="${d.userDashboard__profileCard}  ${d.card}">
            <div class="${d.profileImg}">
              <img data-m-img alt="profileimg" />
            </div>
            <div class="${d.info}">
              <h2>Welcome Back,</h2>
              <div class="${d.infoFirst}">
                <h2 data-m-name class="${d.infoFirst__name}"></h2>
                <h4 data-m-position class="${d.infoFirst__position}"></h4>
              </div>
              <div class="${d.infoSecond}">
                <div class="${d.emailInfo}">
                <img src="icons/email.svg" alt="email" />
                <h4 data-m-email class="${d.email}"></h4>
                </div>
                <div class="${d.callInfo}">
                <img src="icons/call.svg" alt="call" />
                <h4 data-m-phone class="${d.call}"></h4>
                </div>
              </div>
            </div>
          </div>
          <div class="${d.userDashboard__attendance}">

            <div class="${d.userDashboard__todayAttendance} ${d.card}">
              <div class="${d.userDashboard__state}">
                <h2>오늘의 출근</h2>
                <h4 class="${d.userDashboard__todayTag}">출근 전</h4>
              </div>
              <div class="${d.userDashboard__todayAttendanceWrap}">
                <h3 class="${d.userDashboard__today}"></h3>
                <div class="${d.userDashboard__stamp}">
                  <button class="${d.recordStartTimeBtn} open-modal"
                    data-modal-target="#modal-dashboard_1"
                  >
                    <h3>출근하기</h3>
                    <h2 id="userDashboard__startTime">-</h2>
                  </button>
                  <button class="${d.recordEndTimeBtn} open-modal"
                    data-modal-target="#modal-dashboard_2"
                  >
                    <h3>퇴근하기</h3>
                    <h2 id="userDashboard__endTime">-</h2>
                  </button>
                </div>
              </div>
            </div>

            <div class="${d.userDashboard__attendanceHistory} ${d.card}">
              <h2>금주 근무 현황</h2>
              <div class="${d.userDashboard__attendanceTime}">
                  <h3>총 4시간 근무</h3>
              </div>
            </div>
          </div>
          <div class="${d.userDashboard__approval} ${d.card}">
            <div class="${d.userDashboard__approvalContainer}">
              <div class="${d.userDashboard__approvalTitle}">
                <h2>전자결재</h2>
                <h4>최근 3개만 보여집니다.</h4>
              </div>
              <h4 class="${d["userDashboard__approval-title--right"]}">
                <a href="/user/approval">전자결재페이지로 이동</a>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78112 8.00047L5.48126 4.70062L6.42408 3.75781L10.6667 8.00047L6.42408 12.2431L5.48126 11.3003L8.78112 8.00047Z"
                  />
                </svg>
              </h4>
            </div>
            <div class="${d.userDashboard__approvalFilter}">
              <select id="approvalFilter">
                <option value="진행중">진행중</option>
                <option value="승인">승인</option>
                <option value="반려">반려</option>
              </select>
            </div>
            <table class="${d.approvalTable}">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>제목</th>
                  <th>신청일</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody class="${d.approvalTable__tbody}"></tbody>
            </table> 
          </div>
          <div class="${d.userDashboard__notice} ${d.card}">
            <div class="${d.userDashboard__noticeContainer}">
              <div class="${d.userDashboard__noticeTitle}">
                <h2>공지사항</h2>
                <h4>최근 3개만 보여집니다.</h4>
              </div>
              <h4 class=${d.userDashboard__noticeRight}>
                <a href="/user/notices">공지사항페이지로 이동</a>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78112 8.00047L5.48126 4.70062L6.42408 3.75781L10.6667 8.00047L6.42408 12.2431L5.48126 11.3003L8.78112 8.00047Z"
                  />
                </svg>
              </h4>
            </div>
            <table class="${d.noticeTable}">
              <thead>
                <tr>
                  <th>카테고리</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>첨부파일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody class="${d.noticeTable__tbody}"></tbody>
            </table>   
          </div>
        </div>
      </div>
  `,ro(),co(),te(),ge(),N(U("in").modal_id,U("in").header,U("in").content,te),N(U("out").modal_id,U("out").header,U("out").content,te)},Vo="_h5_1oly9_1",Po="_header_1oly9_16",z={h5:Vo,"mileage-contents":"_mileage-contents_1oly9_7",header:Po,"mileage-list":"_mileage-list_1oly9_27","mileage-list__item":"_mileage-list__item_1oly9_37","mileage-list__title":"_mileage-list__title_1oly9_67"},Ro=e=>({modal_id:`mileage_${e.id}`,header:"마일리지 심사",content:`
    <div class="modal-box__form">
            <div class="form-group">
              <h5>카테고리</h5>
                <input
                id="mileage-approve-category_${e.id}"
                data-shape="line"
                type="text"
                value='${e.category}'
                readonly
                autocomplete="off"
              />
            </div>

            <div class="form-group">
              <h5>점수</h5>
              <input id="mileage-approve-score_${e.id}" data-shape="line" type="text" value='${e.score}' readonly autocomplete="off"/>
            </div>

            <div class="form-group">
              <h5>신청자</h5>
              <input id="mileage-approve-employee_${e.id}" data-shape="line" type="text" value='${e.user}' readonly autocomplete="off"/>
            </div>

            <div class="form-group">
              <h5>신청일자</h5>
              <input
                id="mileage-approve-date_${e.id}"
                data-shape="line"
                type="text"
                value='${e.date}'
                readonly
                autocomplete="off"
              />
            </div>

            <div class="form-group">
              <h5>거절사유</h5>
              <select id="rejection-reason">
                <option disabled selected value="none">거절사유 선택</option>
                <option value="점수 작성 오류">점수 작성 오류</option>
                <option value="카테고리 작성 오류">카테고리 작성 오류</option>
                <option value="증빙자료 누락">증빙자료 누락</option>
              </select>
            </div>
          </div>

          <div class="modal-box__review-btns">
            <button
              id="reject-btn-${e.id}"
              class="modal-box__button"
              data-color="positive"
              data-shape="line"
              data-id="${e.id}"
            >
              거절하기
            </button>
            <button
              id="approve-btn-${e.id}"
              class="modal-box__button"
              data-color="positive"
              data-shape="block"
              data-id="${e.id}"
              >
              수락하기
            </button>
          </div>
    `}),Zo=async e=>{try{const t=await fetch(`/api/mileage/${e}/approve`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({isApprove:!0})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();if(n.status==="OK")return alert("마일리지가 승인되었습니다."),!0;throw new Error(n.message||"알 수 없는 오류가 발생했습니다.")}catch(t){return console.error("마일리지 승인 중 오류 발생:",t),alert("마일리지 승인 중 오류가 발생했습니다: "+t.message),!1}},zo=async(e,t)=>{try{const o=await(await fetch(`/api/mileage/${e}/approve`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({isApprove:!1})})).json();if(o.status==="OK")return alert("마일리지가 거절되었습니다."),!0;throw new Error(o.message)}catch(n){return alert("마일리지 거절 중 오류가 발생했습니다: "+n.message),!1}},Oo=e=>{const t=document.getElementById(`approve-btn-${e.id}`),n=document.getElementById(`reject-btn-${e.id}`),o=async()=>{try{await Zo(e.id)&&(document.querySelector(".modal-box.active").classList.remove("active"),document.querySelector("#modal__background").classList.remove("active"),await ve())}catch(s){console.error("승인 처리 중 오류 발생:",s),alert("승인 처리 중 오류가 발생했습니다.")}},a=async()=>{const i=document.querySelector("#rejection-reason").value;try{await zo(e.id,i)&&(document.querySelector(".modal-box.active").classList.remove("active"),document.querySelector("#modal__background").classList.remove("active"),await ve())}catch(l){console.error("거절 처리 중 오류 발생:",l),alert("거절 처리 중 오류가 발생했습니다.")}};t&&(t.removeEventListener("click",o),t.addEventListener("click",o)),n&&(n.removeEventListener("click",a),n.addEventListener("click",a))},Ee=e=>{const t=document.querySelector("#total-item");t.textContent=`${e.length}`;const n=document.querySelector(`.${z["mileage-list"]}`);n.innerHTML="",e.forEach(o=>{const a=document.createElement("div");a.className=z["mileage-list__item"],a.classList.add("open-modal"),a.setAttribute("data-modal-target",`#modal-mileage_${o.id}`),a.style.backgroundImage=`url(${o.image})`,a.innerHTML=`<div class="${z["mileage-list__title"]}">
          <h3>${o.category}</h3>
          <h4>${o.user}</h4>
          <h5>${o.date}</h5>
        </div>`,n.appendChild(a);const s=Ro(o);N(s.modal_id,s.header,s.content),Oo(o)})},Uo=e=>{const t=e.filter(a=>a.isApprove===null);Ee(t);const n=document.querySelector("#toggleSwitch");let o=e.slice();n.addEventListener("click",()=>{const a=document.querySelector("#toggleText").textContent;if(a==="미확인")o=e.filter(s=>s.isApprove===null);else if(a==="확인")o=e.filter(s=>s.isApprove!==null);else return;Ee(o)})},Ie=V(),ve=async()=>{try{Ie.show();const t=await(await fetch("/api/mileage")).json();t.status==="OK"&&Uo(t.data)}catch(e){console.error("Failed to fetch mileage data:",e)}finally{Ie.hide()}},Wo="_header__toggle_13ykr_1",Ko="_slider_13ykr_20",W={header__toggle:Wo,switch:"_switch_13ykr_6",slider:Ko},Ye=(e,t)=>{const n=document.querySelector("#toggleSwitch"),o=document.querySelector("#toggleText");n.addEventListener("click",()=>{n.checked?o.textContent=e:o.textContent=t})},Jo=e=>{e.innerHTML=`
     <div class="${z["mileage-contents"]}">
      <h1 class="${z.title}">마일리지 관리</h1>

      <div class="${z.header}">
        <div class="${W.header__toggle}">
          <!-- input checkbox의 토글 속성을 label로 연결시켜 활용 -->
          <label class="${W.switch}">
            <input type="checkbox" id="toggleSwitch" />
            <span class="${W.slider}"></span>
          </label>
          <h4 id="toggleText">미확인</h4>
        </div>

        <h6>총 <span id="total-item"></span>개의 게시글</h6>
      </div>

      <div class="${z["mileage-list"]}"></div>
    </div>
  `,Ye("확인","미확인"),ve()},re=()=>({modal_id:"mileage_1",header:"마일리지 기준",content:`
            <div class="mileage-standard">
            <div class="mileage-standard__icon seed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"
                />
              </svg>
            </div>
            <div class="mileage-standard__description h5">
              [씨앗 단계] 0~10 마일리지
            </div>
          </div>

          <div class="mileage-standard">
            <div class="mileage-standard__icon sprout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.99805 3C9.48787 3 12.3812 5.55379 12.9112 8.8945C14.0863 7.72389 15.7076 7 17.498 7H21.998V9.5C21.998 13.0899 19.0879 16 15.498 16H12.998V21H10.998V13H8.99805C5.13205 13 1.99805 9.86599 1.99805 6V3H5.99805ZM19.998 9H17.498C15.0128 9 12.998 11.0147 12.998 13.5V14H15.498C17.9833 14 19.998 11.9853 19.998 9.5V9ZM5.99805 5H3.99805V6C3.99805 8.76142 6.23662 11 8.99805 11H10.998V10C10.998 7.23858 8.75947 5 5.99805 5Z"
                />
              </svg>
            </div>
            <div class="mileage-standard__description h5">
              [새싹 단계] 11~30 마일리지
            </div>
          </div>

          <div class="mileage-standard">
            <div  class="mileage-standard__icon leaf">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
                >
              </svg>
            </div>
            <div class="mileage-standard__description h5">
              [잎새 단계] 31~50 마일리지
            </div>
          </div>

          <div class="mileage-standard">
            <div class="mileage-standard__icon tree">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 7.26214 17.9831 7.5207 17.9504 7.77457C19.77 8.80413 21 10.7575 21 13C21 16.3137 18.3137 19 15 19H13V22H11V19H8.5C5.46243 19 3 16.5376 3 13.5C3 11.2863 4.30712 9.37966 6.19098 8.50704C6.06635 8.02551 6 7.52039 6 7ZM7.00964 10.3319C5.82176 10.8918 5 12.1008 5 13.5C5 15.433 6.567 17 8.5 17H15C17.2091 17 19 15.2091 19 13C19 11.3056 17.9461 9.85488 16.4544 9.27234L15.6129 8.94372C15.7907 8.30337 16 7.67183 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 8.30783 8.6266 9.46903 9.60019 10.2005L8.39884 11.7995C7.85767 11.3929 7.38716 10.8963 7.00964 10.3319Z"
                />
              </svg>
            </div>
            <div class="mileage-standard__description h5">
              [나무 단계] 50 마일리지 달성!
            </div>
          </div>
          `}),le=()=>({modal_id:"mileage_2",header:"마일리지 신청",content:`
          <div class="modal-box__form">
            <div class="form-group">
              <h5>카테고리</h5>
              <select id="environment-category">
                <option disabled selected value="">카테고리를 선택하세요.</option>
                <option>재활용 및 분리수거</option>
                <option>대중교통 및 자전거 이용</option>
                <option>에너지 절약</option>
                <option>재사용 및 업사이클링</option>
                <option>친환경 제품 구매</option>
              </select>
            </div>

            <div class="form-group">
              <h5>점수</h5>
              <select id="score">
                <option value="" disabled selected>점수를 선택하세요.</option>
                <option value="1">1점</option>
                <option value="2">2점</option>
                <option value="3">3점</option>
              </select>
            </div>

            <div class="form-group">
              <h5>신청일자</h5>
              <input id="mileage-date" data-shape="line" type="date" />
            </div>

            <div class="form-group">
              <h5>증빙자료</h5>
              <input
                data-shape="line"
                type="file"
                id="mileage-image"
                name=""
                accept="image/png, image/jpeg"
                multiple
              />
            </div>
          </div>

          <button
            class="modal-box__button"
            data-color="positive"
            data-shape="block"
          >
            신청하기
          </button>
          </div>`}),Qo=e=>{e.innerHTML=`
      <div class="${v["mileage-contents"]}">
        <h1 class="${v.title}">마일리지</h1>
        <div class="${v["mileage-score"]}">
          <div class="${v["mileage-score__left"]}">
            <div class="${v["mileage-icon"]}" id="total-mileage-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"
                ></path>
              </svg>
            </span>
            </div>
            <div class="${v["mileage-score__detail"]}">
              <h3 class="${v["mileage-score__total-score"]}">총 <span id="total-mileage-score">100</span> 마일리지</h3>
              <h4 class="${v["mileage-score__message"]}" >
                <span id="total-mileage-text">새싹단계에요. 조금만 더 힘내보세요 :)</span>
              </h4>
            </div>
          </div>
          <h4
            class="${v["mileage-score__right"]} open-modal"
            data-modal-target="#modal-mileage_1"
          >
            마일리지 기준 알아보기<svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.78112 8.00047L5.48126 4.70062L6.42408 3.75781L10.6667 8.00047L6.42408 12.2431L5.48126 11.3003L8.78112 8.00047Z"
              />
            </svg>
          </h4>
        </div>
        <div class="${v["mileage-approve"]}">
          <div data-mileage-tabs class="${v["mileage-approve__tabs"]}">
            <button
              id = "undetermined"
              data-mileage-tab
              class="${v["mileage-approve__tab"]} ${v["mileage-approve__tab--undetermined"]}"
            >
              심사중
            </button>
            <button 
              id = "approved"
              data-mileage-tab
              class="${v["mileage-approve__tab"]} ${v["mileage-approve__tab--approved"]}">
              승인
            </button>
            <button 
              id = "rejected"
              data-mileage-tab
              class="${v["mileage-approve__tab"]} ${v["mileage-approve__tab--rejected"]}">
              반려
            </button>
          </div>
          <div class="${v["mileage-approve__btns"]}">
            <button
              data-color="positive"
              data-shape="line"
              class="${v["mileage-approve__save-list"]}"
            >
              마일리지 적립목록
            </button>
            <button
              class="${v["mileage-approve__request"]} open-modal"
              data-modal-target="#modal-mileage_2"
              data-color="positive"
              data-shape="block"
            >
              마일리지 신청
            </button>
          </div>
        </div>
        <div class="${v.mileage__filter}">
          <select id="filter">
            <option value="latest">최신순</option>
            <option value="old">오래된순</option>
          </select>
          <h6>총 <span id="total-item"></span>개의 게시글</h6>
        </div>
        <div class="${v["mileage-list"]}" id="mileage-list"></div>
    </div>
  `,Ge(),N(re().modal_id,re().header,re().content,me),N(le().modal_id,le().header,le().content,me),document.querySelector(`.${v["mileage-approve__save-list"]}`).addEventListener("click",()=>{history.pushState(null,null,"/user/mileage/history"),H()});const t=document.querySelectorAll("[data-mileage-tab]"),n=document.querySelector("[data-mileage-tabs]");t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(a=>a.classList.remove("active")),o.classList.add("active"),n.classList.remove(v["active-undetermined"],v["active-approved"],v["active-rejected"]),n.classList.add(v[`active-${o.id}`])})})},Go="_h5_1n9bg_2",Yo="_contents_1n9bg_9",Xo="_details_1n9bg_16",en="_count_1n9bg_20",tn="_details__header_1n9bg_24",an="_details__row_1n9bg_25",on="_details__title_1n9bg_31",nn="_details__mileage_1n9bg_45",sn="_pagination_1n9bg_53",rn="_active_1n9bg_61",B={h5:Go,contents:Yo,details:Xo,count:en,details__header:tn,details__row:an,details__title:on,"details__registration-date":"_details__registration-date_1n9bg_38",details__mileage:nn,pagination:sn,active:rn},ln=e=>{const t=document.querySelector(`.${B.details}`);t.innerHTML="";const n=document.querySelector(`.${B.details}`);e.forEach(o=>{const a=document.createElement("li");a.className=B.details__row,a.innerHTML=`
          <div class="${B.details__title}">${o.category}</div>
          <div class="${B["details__registration-date"]}">${o.date.replaceAll("-",".")}</div>
          <div class="${B.details__mileage}">${o.score}</div>
          `,n.appendChild(a)})},He=V(),cn=async()=>{try{He.show();const e=await dn(),t=_n(e);R(t,ln)}catch(e){console.error("마일리지 데이터 조회 중 오류 발생:",e)}finally{He.hide()}},dn=async()=>{const e=await fetch("/api/mileage");if(!e.ok)throw new Error("서버 응답이 정상적이지 않습니다");const t=await e.json();if(t.status!=="OK")throw new Error(t.error||"마일리지 데이터 조회 실패");return t.data},_n=e=>{const t=sessionStorage.getItem("userName");return e.filter(n=>n.user===t&&n.isApprove===1)},pn=e=>{e.innerHTML=`
    <div class="${B.contents}">
      <h1 class="${B.title}">마일리지 > 마일리지 적립목록</h1>
      <h2>마일리지 적립목록</h2>

      <ul class="${B.details} ${B.h5}">
        <li class="${B.details__header}">
          <div class="${B.details__title}">제목</div>
          <div class="${B["details__registration-date"]}">등록일</div>
          <div class="${B.details__mileage}">마일리지</div>
        </li>
      </ul>

      <div id="pagination" class="${B.pagination}"></div>
    </div>
  `,cn()},un="_pageEvent_czic3_5",hn="_birthdayInfo_czic3_17",mn="_joindayInfo_czic3_23",vn="_pageHeader_czic3_28",gn="_totalInfo_czic3_35",bn="_table_czic3_40",yn="_tableContainer_czic3_49",fn="_tableHead_czic3_54",$n="_tableContent_czic3_61",wn="_employeeTableBody_czic3_65",Cn="_headProfileImage_czic3_71",Dn="_headName_czic3_72",Sn="_headPosition_czic3_73",Ln="_headEmail_czic3_74",Tn="_headBirthday_czic3_75",kn="_headJoinday_czic3_76",xn="_headContact_czic3_77",En="_headButton_czic3_78",In="_profileImage_czic3_84",Hn="_name_czic3_85",qn="_position_czic3_86",Mn="_email_czic3_87",Bn="_birthday_czic3_17",An="_joinday_czic3_23",jn="_contact_czic3_90",Fn="_button_czic3_91",Nn="_employeeListRow_czic3_97",Vn="_employeeListTable_czic3_116",Pn="_employeeListThead_czic3_117",Rn="_employeeListTbody_czic3_118",Zn="_employeeListImg_czic3_122",zn="_employeeListInfo_czic3_126",k={pageEvent:un,birthdayInfo:hn,joindayInfo:mn,pageHeader:vn,totalInfo:gn,table:bn,tableContainer:yn,tableHead:fn,tableContent:$n,employeeTableBody:wn,headProfileImage:Cn,headName:Dn,headPosition:Sn,headEmail:Ln,headBirthday:Tn,headJoinday:kn,headContact:xn,headButton:En,profileImage:In,name:Hn,position:qn,email:Mn,birthday:Bn,joinday:An,contact:jn,button:Fn,employeeListRow:Nn,employeeListTable:Vn,employeeListThead:Pn,employeeListTbody:Rn,employeeListImg:Zn,employeeListInfo:zn},On="_page_zpako_1",Un="_page__content_zpako_10",Wn="_page__button_zpako_21",Kn="_page__edit_zpako_30",Jn="_edit__btn_zpako_45",Qn="_chooseFile_zpako_1",Gn="_info__value_zpako_63",Yn="_user__info_zpako_79",Xn="_info__position_zpako_100",es="_info__birthday_zpako_105",ts="_info__joinday_zpako_106",as="_table__container_zpako_111",os="_profileimg_zpako_117",ns="_page__title_zpako_126",w={page:On,page__content:Un,page__button:Wn,page__edit:Kn,edit__btn:Jn,chooseFile:Qn,info__value:Gn,user__info:Yn,info__position:Xn,info__birthday:es,info__joinday:ts,table__container:as,profileimg:os,page__title:ns},qe=e=>{const t=document.getElementById("employeeTableBody");if(t.innerHTML="",e.length===0){const n=document.createElement("tr"),o=document.createElement("td");o.colSpan=7,o.textContent="직원목록이 없습니다. 직원을 추가해주세요.",o.style.textAlign="center",o.style.padding="20px",n.appendChild(o),t.appendChild(n)}else e.forEach(n=>{const o=document.createElement("tr");o.innerHTML=`
        <td class="${w.profileimg}"><img src="${n.profileImage}" alt="profileimg"></td>
        <td data-label="이름" class="${w.name}">${n.name}</td>
        <td data-label="직함" class="${w.position}">${n.position}</td>
        <td data-label="이메일" class="${w.email}">${n.email}</td>
        <td data-label="생일" class="${w.birthday}">${n.birthday}</td>
        <td data-label="입사일" class="${w.joinday}">${n.startDate}</td>
        <td data-label="핸드폰번호" class="${w.contact}">${n.phone}</td>
      `,t.appendChild(o),o.dataset.id=n.id,o.dataset.name=n.name,o.dataset.position=n.position,o.dataset.email=n.email,o.dataset.birthday=n.birthday,o.dataset.startDate=n.startDate,o.dataset.phone=n.phone,o.dataset.profileImage=n.profileImage,o.addEventListener("click",()=>{const a={id:o.dataset.id,name:o.dataset.name,position:o.dataset.position,email:o.dataset.email,birthday:o.dataset.birthday,startDate:o.dataset.startDate,phone:o.dataset.phone,profileImage:o.dataset.profileImage},s=new URLSearchParams(a).toString();history.pushState(null,null,`/admin/employee/edit?${s}`),H()}),o.style.cursor="pointer"})},ss=e=>{qe(e),(n=>{const o=document.querySelector("#employeeSearchBox");o.addEventListener("input",()=>{const a=o.value.trim().toLowerCase(),s=n.filter(i=>i.name.toLowerCase().includes(a)||i.position.toLowerCase().includes(a));qe(s)})})(e)},Me=V(),is=async()=>{try{Me.show();const e=await fetch("/api/users");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();if(t.status==="OK")return ss(t.data),t.data;console.error("Error fetching notices:",t.error)}catch(e){console.error("Failed to fetch notices:",e)}finally{Me.hide()}return[]},rs=e=>{e.innerHTML=`
  <h1>직원 관리</h1>
  
  <div class="${k.pageEvent}">
    <div class="${k.birthdayInfo}">
    <img src="icons/cake.svg" alt="cake" />
    <h3><span class="${k.eventBirthday}" id="todayBirthday">금일의 생일자: 로딩 중 ...</span></h3>
    </div>
    <div class="${k.joindayInfo}">
    <img src="icons/seedling.svg" alt="seedling" />
    <h3><span class="${k.eventJoinday}" id="todayJoinDay">금일의 입사자: 로딩 중 ...</span></h3>
    </div>
  </div>

  <div class="${k.pageHeader}">
    <input type="search" id="employeeSearchBox" name="search" placeholder="검색" />
    <button id="addEmployeeButton" data-color="positive" data-shape="block">직원 추가</button>
  </div>

  <h4 class="${k.totalInfo}" id="totalEmployeeCount">총 인원: 로딩 중 ...</h4>

  <div class="${k.table}">
    <table class="${k.tableContainer}">
      <thead class="${k.tableHead}">
        <tr class="${k.headUserList}">
          <th class="${k.headProfileImage}">사진</th>
          <th class="${k.headName}">이름</th>
          <th class="${k.headPosition}">직함</th>
          <th class="${k.headEmail}">이메일</th>
          <th class="${k.headBirthday}">생일</th>
          <th class="${k.headJoinday}">입사일</th>
          <th class="${k.headContact}">핸드폰 번호</th>
        </tr>
      </thead>
      <tbody class="${k.employeeTableBody}" id="employeeTableBody"></tbody>    
    </table>
    
    <!-- 모바일 버전 -->
    <div class="${k.employeeList}"></div>

  </div> 
  `,_s(),ls()},ls=async()=>{const e=await is();e&&e.length&&(cs(e.length),ds(e))},cs=e=>{document.getElementById("totalEmployeeCount").innerText=`총 인원: ${e}명`},ds=e=>{const t=new Date,n=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),a=e.filter(r=>{const[m,h,g]=r.birthday.split(/[-.]/);return h===n&&g===o}),s=e.filter(r=>{const[m,h,g]=r.startDate.split(/[-.]/);return h===n&&g===o}),i=a.map(r=>r.name).join(", "),l=s.map(r=>r.name).join(", ");document.getElementById("todayBirthday").innerText=`금일의 생일자: ${i||"없음"}`,document.getElementById("todayJoinDay").innerText=`금일의 입사자: ${l||"없음"}`},_s=()=>{const e=document.getElementById("addEmployeeButton");e&&e.addEventListener("click",ps)},ps=()=>{history.pushState(null,null,"/admin/employee/add"),H()},us="_page_cpm69_4",hs="_page__content_cpm69_13",ms="_page__button_cpm69_24",vs="_page__edit_cpm69_33",gs="_edit__btn_cpm69_48",bs="_uploadProfile_cpm69_56",ys="_user__info_cpm69_69",fs="_info__position_cpm69_90",$s="_info__birthday_cpm69_95",ws="_info__joinday_cpm69_96",Cs="_table__container_cpm69_101",Ds="_imageContainer_cpm69_107",Ss="_imageContainer__image_cpm69_113",Ls="_info__fileInput_cpm69_126",Ts="_imgBtnContainer_cpm69_130",ks="_info__fileLabel_cpm69_137",xs="_page__title_cpm69_156",D={page:us,page__content:hs,page__button:ms,page__edit:vs,edit__btn:gs,uploadProfile:bs,user__info:ys,info__position:fs,info__birthday:$s,info__joinday:ws,table__container:Cs,imageContainer:Ds,imageContainer__image:Ss,info__fileInput:Ls,imgBtnContainer:Ts,info__fileLabel:ks,page__title:xs},Es=()=>{const e=container.querySelector("[data-e-add]"),t=document.querySelector(`.${D.info__fileInput}`),n=container.querySelector("[data-e-delete]"),o=container.querySelector("[data-e-back]");e.addEventListener("click",As),t.addEventListener("change",Hs),n.addEventListener("click",Ms),o.addEventListener("click",Is),qs()},Is=()=>{localStorage.removeItem("profileImage"),history.pushState(null,null,"/admin/employee"),H()},Hs=e=>{const t=e.target.files[0],n=document.querySelector(`.${D.imageContainer__image}`);if(t){const o=new FileReader;o.onload=a=>{n.innerHTML="";const s=document.createElement("img");s.setAttribute("src",a.target.result),n.appendChild(s),localStorage.setItem("profileImage",a.target.result)},o.readAsDataURL(t)}else localStorage.removeItem("profileImage"),ye(n)},qs=()=>{const e=document.querySelector(`.${D.imageContainer__image}`),t=localStorage.getItem("profileImage");if(t){e.innerHTML="";const n=document.createElement("img");n.setAttribute("src",t),e.appendChild(n)}else ye(e)},Ms=e=>{e.preventDefault();const t=document.querySelector(`.${D.imageContainer__image}`);t.innerHTML="",localStorage.removeItem("profileImage"),ye(t),Bs()},Bs=()=>{const e=document.querySelector(`.${D.info__fileInput}`);e.value="",e.dispatchEvent(new Event("change",{bubbles:!0}))},ye=e=>{const t=document.createElement("img");t.setAttribute("src","images/defaultProfile.png"),t.style.display="block",e.appendChild(t),localStorage.setItem("profileImage","images/defaultProfile.png")},As=async e=>{if(e){e.preventDefault();const t=document.querySelector("[data-e-name]").value,n=document.querySelector("[data-e-positions]").value,o=document.querySelector("[data-e-email]").value,a=document.querySelector("[data-e-phone]").value,s=document.querySelector("[data-e-birthday]").value,i=document.querySelector("[data-e-joinday]").value,r=document.querySelector("[data-e-input]").files[0];if(!t||!o||!n||!s||!i){alert("이름, 이메일, 직함, 생일, 입사일은 필수 입력 항목입니다.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)){alert("올바른 이메일 형식을 입력해주세요.");return}const h=new FormData;h.append("name",t),h.append("email",o),h.append("position",n),h.append("birthday",s),h.append("startDate",i),h.append("password","1234"),a&&h.append("phone",a),r&&h.append("profileImage",r);try{const g=await fetch("/api/users",{method:"POST",body:h});if(!g.ok)throw new Error(`HTTP 오류! 상태: ${g.status}`);const C=await g.json();C.status==="OK"?(alert("직원 추가에 성공했습니다."),localStorage.removeItem("profileImage"),setTimeout(()=>{history.pushState(null,null,"/admin/employee"),H()},2e3)):(console.error("직원 추가 오류:",C.error),alert("직원 추가 중 오류가 발생했습니다."))}catch(g){console.error("직원 추가 실패:",g),alert("직원 추가에 실패했습니다.")}}},js=e=>{e.innerHTML=`
  <div class="${D.page}">
  <h1 class="${D.page__title}">직원 관리 >직원 추가</h1>

  <!-- 상단 추가 버튼 부분입니다. -->
  <div class="${D.page__content}">
    <div class="${D.page__button}">
    <button data-e-back data-color='warning' data-shape='block'>뒤로가기</button>
    <button data-e-add data-color='positive' data-shape='block'>추가하기</button>
  </div>
  <form id="employeeForm" enctype="multipart/form-data">
    <div class="${D.imageContainer}">
      <span data-e-add-img class="${D.imageContainer__image}"></span>
    </div>

      <div data-e-form>
        <div class="${D.imgBtnContainer}">
            <button data-e-delete data-shape="line" data-color="neutral" class="${D.info__fileDelete}">이미지 삭제</button>
            <label for="fileInput" class="${D.info__fileLabel}">이미지 등록</label>
        </div>
        <input data-e-input id="fileInput" class="${D.info__fileInput}" type="file" name="profileImage" accept="image/*">
        <button class="${D.uploadProfile}" type="submit">이미지 업로드</button>
      </div>
            <ul class="${D.user__info}">
              <li class="${D.info__name}">
                <label for="name"><h5>이름</h5></label>
                <input  data-e-name data-shape="line" type="name" id="name" placeholder="홍길동" required/>
              </li>

              <li class="${D.info__position}">
                <label for="positions"><h5>직함</h5></label>
                <select data-e-positions name="positions" id="positions" required>
                  <option value="사장">사장</option>
                  <option value="부장">부장</option>
                  <option value="차장">차장</option>
                  <option value="과장">과장</option>
                  <option value="대리">대리</option>
                  <option value="사원">사원</option>
                </select>
              </li>

              <li class="${D.info__email}">
                <label for="email"><h5>이메일</h5></label>
                <input data-e-email data-shape="line" type="email" name="email" id="email" placeholder="eco@taeco.com" required/>
              </li>

              <li class="${D.info__phonenumber}">
                <label for="phone"><h5>전화번호</h5></label>
                <input data-e-phone data-shape="line" name="phone" type="tel" id="phone" placeholder="010-0000-0000" required/>
              </li>

              <li class="${D.info__birthday}">
                <label for="birthday"><h5>생일</h5></label>
                <input data-e-birthday data-shape="line"name="birthday"  type="date" id="birthday" required/>
              </li>
              
              <li class="${D.info__joinday}">
                <label for="joinday"><h5>입사일</h5></label>
                <input data-e-joinday data-shape="line" name="startDate" type="date" id="joinday" required/>
              </li>
            </ul>
          </form>
  `,Es()},Fs=()=>{const e=new URLSearchParams(window.location.search);return{id:e.get("id"),name:e.get("name"),position:e.get("position"),email:e.get("email"),birthday:e.get("birthday"),startDate:e.get("startDate"),phone:e.get("phone"),profileImage:e.get("profileImage")}},Ns=()=>{const e=Fs();if(e.id){document.getElementById("name").textContent=e.name,document.getElementById("positions").textContent=e.position,document.getElementById("email").textContent=e.email,document.getElementById("phone").textContent=e.phone;const t=n=>{const o=new Date(n),a=o.getFullYear(),s=String(o.getMonth()+1).padStart(2,"0"),i=String(o.getDate()).padStart(2,"0");return`${a}-${s}-${i}`};document.getElementById("birthday").textContent=t(e.birthday),document.getElementById("joinday").textContent=t(e.startDate),document.querySelector('img[alt="profileimg"]').src=e.profileImage}},Vs=e=>{e.innerHTML=`
  <div class="${w.page}">
  <h1 class="${w.page__title}">직원 관리 > 직원 상세</h1>

  <!-- 상단 추가 버튼 부분입니다. -->
  <div class="${w.page__content}">
    <div class="${w.page__button}">
    <button id="backButton" data-color='neutral' data-shape='block'>뒤로가기</button>
  </div>

  <!-- 직원 프로필 이미지 업로드 부분입니다. -->
  <div class="${w.page__edit}">
    <img src="images/_Avatar_.png" alt="profileimg">
  </div>

  <form class="infoform"action="#" method="post">
            <ul class="${w.user__info}">
              <li class="${w.info__name}">
                <label for="name"><h5>이름</h5></label>
                <div id="name" class="${w.info__value}"></div>
              </li>

              <li class="${w.info__position}">
                <label for="positions"><h5>직함</h5></label>
                <div id="positions" class="${w.info__value}"></div>
              </li>

              <li class="${w.info__email}">
                <label for="email"><h5>이메일</h5></label>
                <div id="email" class="${w.info__value}"></div>
              </li>

              <li class="${w.info__phonenumber}">
                <label for="phone"><h5>전화번호</h5></label>
                <div id="phone" class="${w.info__value}"></div>
              </li>

              <li class="${w.info__birthday}">
                <label for="birthday"><h5>생일</h5></label>
                <div id="birthday" class="${w.info__value}"></div>
              </li>
              
              <li class="${w.info__joinday}">
                <label for="joinday"><h5>입사일</h5></label>
                <div id="joinday" class="${w.info__value}"></div>
              </li>
            </ul>
          </form>
  `,document.getElementById("backButton").addEventListener("click",()=>{history.pushState(null,null,"/admin/employee"),H()}),Ns()},Ps="_page_xum7c_5",Rs="_page__header_xum7c_9",Zs="_page__body_xum7c_17",zs="_page__bodyProfile_xum7c_28",Os="_info_xum7c_34",Us="_info__first_xum7c_42",Ws="_info__name_xum7c_48",Ks="_info__second_xum7c_52",Js="_section1_xum7c_61",Qs="_section2_xum7c_62",Gs="_email_xum7c_68",F={page:Ps,page__header:Rs,page__body:Zs,page__bodyProfile:zs,info:Os,info__first:Us,info__name:Ws,info__second:Ks,section1:Js,section2:Qs,email:Gs},Ys=e=>{e.innerHTML=`
  <h1>마이페이지</h1>
  <div class="${F.page__header}">
    <h2>내정보</h2>
    <button id="editButton" data-color="positive" data-shape="block">정보 수정</button>
  </div>
  <div class="${F.page__body}">
    <div class="page__body-img">
      <img class="${F.page__bodyProfile}" data-m-img alt="profileimg">
    </div>
    <div class="${F.info}">
      <div class="${F.info__first}">
        <h2 data-m-name class="${F.info__name}"></h2> 
        <h4 data-m-position class="${F.info__position}"></h4>
      </div>
      <div class="${F.info__second}">
        <div class="${F.section1}">
          <img src="icons/email.svg" alt="email">
          <h4 data-m-email class="${F.email}"></h4>
        </div>
        <div class="${F.section2}">
          <img src="icons/call.svg" alt="call">
          <h4 data-m-phone class="${F.phone}"></h4>
        </div>
      </div>
  </div>
  `,ge(),document.getElementById("editButton").addEventListener("click",()=>{history.pushState(null,null,"/user/mypage/editpage"),H()})},Xs="_page_14v0o_1",ei="_page__title_14v0o_6",ti="_page__header_14v0o_10",ai="_page__body_14v0o_19",oi="_body__img_14v0o_27",ni="_profileimg_14v0o_37",si="_background_14v0o_1",ii="_profileImg_14v0o_46",ri="_imgbtn_14v0o_52",li="_user__info_14v0o_63",ci="_pageFooter_14v0o_100",di="_toastMessage_14v0o_105",_i="_toastText_14v0o_123",pi="_active_14v0o_132",ui="_imageContainer_14v0o_140",hi="_imageContainer__image_14v0o_146",mi="_info__fileInput_14v0o_159",vi="_imgBtnContainer_14v0o_163",gi="_info__fileLabel_14v0o_170",bi="_uploadProfile_14v0o_186",b={page:Xs,page__title:ei,page__header:ti,page__body:ai,body__img:oi,profileimg:ni,background:si,profileImg:ii,imgbtn:ri,user__info:li,pageFooter:ci,toastMessage:di,toastText:_i,active:pi,imageContainer:ui,imageContainer__image:hi,info__fileInput:mi,imgBtnContainer:vi,info__fileLabel:gi,uploadProfile:bi};function yi(){const e=document.querySelector(`.${b.toastMessage}`);e?(e.classList.add(b.active),setTimeout(()=>{e.classList.remove(b.active)},2e3)):console.error("toastMessage 요소를 찾을 수 없습니다.")}const fi=e=>{const t=document.querySelector("[data-profile-input]"),n=container.querySelector("[data-profile-delete]"),o=q=>{if(!q)return"";if(q.includes("-"))return q;const T=q.split(".");if(T.length!==3)return console.error("Invalid date format:",q),"";const[j,O,tt]=T,at=O.padStart(2,"0"),ot=tt.padStart(2,"0"),fe=`${j}-${at}-${ot}`;return console.log("Formatted date:",fe),fe},a=document.querySelector("[data-profile-name]"),s=document.querySelector("[data-profile-positions]"),i=document.querySelector("[data-profile-email]"),l=document.querySelector("[data-profile-phone]"),r=document.querySelector("[data-profile-birthday]"),m=document.querySelector("[data-profile-joinday]"),h=document.querySelector("[data-profile-password]"),g=document.querySelector("[data-profile-add-img]");let C=null;a.value=e.name||a.placeholder,s.value=e.position,i.value=e.email||i.placeholder,l.value=e.phone||l.placeholder,r.value=o(e.birthday),m.value=o(e.startDate),h.value=e.password;const I=(q,T)=>{g.innerHTML=`<img src="${q}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;">`,C=T},M=()=>{I("images/defaultProfile.png")},P=()=>{e.profileImage?I(e.profileImage):M()},p=q=>{const T=q.target.files[0];if(T){const j=new FileReader;j.onload=O=>I(O.target.result,T),j.readAsDataURL(T)}},$=q=>{q.preventDefault(),M(),C="images/defaultProfile.png"};t.addEventListener("change",p),n.addEventListener("click",$),P(),document.getElementById("saveButton").addEventListener("click",async()=>{const q=sessionStorage.getItem("userId"),T=new FormData;if(T.append("name",document.querySelector("[data-profile-name]").value),T.append("email",document.querySelector("[data-profile-email]").value),T.append("position",document.querySelector("[data-profile-positions]").value),T.append("phone",document.querySelector("[data-profile-phone]").value),T.append("birthday",document.querySelector("[data-profile-birthday]").value),T.append("startDate",document.querySelector("[data-profile-joinday]").value),T.append("password",document.querySelector("[data-profile-password]").value),!C){const j=g.querySelector("img");j&&(C=j.src)}C&&(typeof C=="string"?T.append("profileImage",C):T.append("profileImage",C,C.name),sessionStorage.setItem("userProfileImage",C));try{const j=await fetch(`/api/users/${q}`,{method:"PUT",body:T});if(!j.ok)throw new Error("Failed to update user data");const O=await j.json();O.status==="OK"?(yi(),C=null,setTimeout(()=>{history.pushState(null,null,"/user/mypage"),H()},2e3)):(console.error("직원 추가 오류:",O.error),alert("직원 추가 중 오류가 발생했습니다."))}catch(j){console.error("Error updating user data:",j),alert("사용자 정보 업데이트에 실패했습니다. 다시 시도해 주세요.")}})},Be=V(),$i=async()=>{const e=sessionStorage.getItem("userId");try{Be.show();const t=await fetch("/api/users");if(!t.ok)throw new Error("Failed to fetch user data");const o=(await t.json()).data.find(a=>a.id.toString()===e);if(fi(o),!o)throw new Error("User not found")}catch(t){console.error("Error fetching user data:",t),container.innerHTML="<p>사용자 정보를 불러오는 데 실패했습니다.</p>"}finally{Be.hide()}},wi=e=>{e.innerHTML=`
  <!-- 페이지 타이틀 -->
<h1 class=${b.page__title}">마이페이지</h1>

<div class="${b.page}">
<div class="${b.page__header}">
  <h2>내정보</h2>
  <div>
  <button class="${b.backButton}" data-color='warning' data-shape='block' id="backButton">뒤로가기</button>
  <button class="${b.saveButton}" data-color='positive' data-shape='block' id="saveButton">변경사항 저장</button>
  </div>
</div>

<!-- 내 정보 사진 수정 부분입니다. -->
<div class="${b.page__body}">
  <!-- 내 정보 입력 부분입니다. -->
  <div class="${b.imageContainer}">
      <span data-profile-add-img class="${b.imageContainer__image}"></span>
    </div>
    <div data-e-form>
      <div class="${b.imgBtnContainer}">
        <button data-profile-delete data-shape="line" data-color="neutral" class="${b.info__fileDelete}">이미지 삭제</button>
        <label for="fileInput" class="${b.info__fileLabel}">이미지 등록</label>
      </div>
    <input data-profile-input id="fileInput" class="${b.info__fileInput}" type="file" name="profileImage" accept="image/*">
  <button class="${b.uploadProfile}" type="submit">이미지 업로드</button>
  </div>
  <form action="/submit-user-info" method="post">
    <ul class="${b.user__info}">
      <li class="${b.info__name}">
        <label for="name"><span>이름</span></label>
        <input data-profile-name data-shape="line" type="name" id="name" placeholder=""/>
      </li>
      
      <li class="${b.info__position}">
        <label for="positions"><span>직함</span></label>
        <select data-profile-positions name="positions" id="positions" required>
          <option value="사장">사장</option>
          <option value="부장">부장</option>
          <option value="차장">차장</option>
          <option value="과장">과장</option>
          <option value="대리">대리</option>
          <option value="사원">사원</option>
        </select>
      </li>
      
      <li class="${b.info__email}">
        <label for="email"><span>이메일</span></label>
        <input data-profile-email data-shape="line" type="email" id="email" placeholder="taeco@gmail.com"/>
      </li>
      
      <li class="${b.info__password}">
        <label for="password"><span>비밀번호</span></label>
        <input data-profile-password data-shape="line" type="password" id="password" placeholder=""/>
      </li>

      <li class="${b.info__number}">
        <label for="phone"><span>전화 번호</span></label>
        <input data-profile-phone data-shape="line" type="text" id="phone" placeholder="010-0000-0000"/>
      </li>

      <li class="${b.info__birthday}">
        <label for="birthday"><span>생일</span></label>
        <input data-profile-birthday data-shape="line" type="date" id="birthday" required/>
      </li>
      
      <li class="${b.info__joinday}">
        <label for="joinday"><span>입사일</span></label>
        <input data-profile-joinday data-shape="line" type="date" id="joinday" required/>
      </li>
    </ul>
  </form>
</div>

<!-- 정보 수정 완료 토스트 부분입니다. -->
<div class="${b.pageFooter}">
    <div class="${b.toastMessage}" id="toastMessage">
      <img src="icons/check.svg" alt="check">
      <div class="${b.toastText}" id="toastText">
        <h4>정보 수정</h4>
        <h5>수정이 완료되었습니다.</h5>
      </div>
    </div>
    </div>
</div>
  `,$i(),document.querySelector(`.${b.backButton}`).addEventListener("click",()=>{history.pushState(null,null,"/user/mypage"),H()})},Ci="_noticeContainer_trv3d_1",Di="_contents__newBtnWrap_trv3d_7",Si="_noticeContainer__filterWrap_trv3d_17",Li="_adminNoticeTable_trv3d_24",Ti="_noticeResponsive_trv3d_83",ki="_importantTag_trv3d_88",xi="_notices__tabs_trv3d_98",Ei="_notices__tab_trv3d_98",Ii="_active_trv3d_118",Hi="_noticeContainer__filter_trv3d_17",qi="_noticeResponsive__attachment_trv3d_165",y={noticeContainer:Ci,contents__newBtnWrap:Di,noticeContainer__filterWrap:Si,adminNoticeTable:Li,noticeResponsive:Ti,importantTag:ki,notices__tabs:xi,notices__tab:Ei,active:Ii,noticeContainer__filter:Hi,noticeResponsive__attachment:qi},Ae=e=>{const t=document.querySelector("[data-n-table-body]"),n=sessionStorage.getItem("userName")||"";if(t.innerHTML="",e.length===0){const o=document.createElement("tr"),a=document.createElement("td");a.colSpan=6,a.textContent="공지사항이 없습니다.",a.style.textAlign="center",a.style.padding="20px",o.appendChild(a),t.appendChild(o)}else e.forEach(o=>{const a=document.createElement("tr"),s=o.attachments!==null,i=o.isImportant===1,l=o.category;let r="";switch(l){case"event":r="이벤트";break;case"mileage":r="마일리지";break;case"education":r="교육";break;case"approval":r="전자결재";break;case"etc":r="기타";break;case"human-resource":r="인사행정";break;default:r="Unknown category.";break}a.innerHTML=`
              <td >${i?`<span class="${y.importantTag}">중요</span> `:o.id}</td>
              <td>${o.title}</td>
              <td>${n}</td>
              <td>${o.createdAt}</td>
              <td>${s?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':""}</td>
              <td>${o.views}</td>
              <td>
              <p>[${r}] ${o.title}</p>
                <div class="${y.noticeResponsive}">
                    <p>작성자:${o.author} / </p>
                    <p>작성일:${o.createdAt} / </p>
                    <p class="${y.noticeResponsive__attachment}">첨부파일:
                    ${s?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':"없음"}
                    </p>
                </div>
          </td>
        `,t.appendChild(a),a.dataset.id=o.id,a.dataset.title=o.title,a.dataset.author=n,a.dataset.createdAt=o.createdAt,a.dataset.attachments=o.attachments?"true":"false",a.dataset.views=o.views,a.dataset.description=o.description,a.addEventListener("click",()=>{const m={id:a.dataset.id,title:a.dataset.title,author:a.dataset.author,createdAt:a.dataset.createdAt,attachments:a.dataset.attachments,views:a.dataset.views,description:a.dataset.description},h=new URLSearchParams(m).toString();history.pushState(null,null,`/admin/notices/detail?${h}`),H()})})};let je=[],Fe="event",ce="latest",G="";const Mi=e=>{je=e;const t=document.querySelector(`.${y.notices__tabs}`),n=document.querySelector("#noticeFilter"),o=document.querySelector("#noticeSearchBox");document.getElementById("event").classList.add(y.active),n.value=ce;const a=()=>{let s=je.filter(i=>i.category===Fe);G&&(s=s.filter(i=>i.title.toLowerCase().includes(G)||i.author.toLowerCase().includes(G))),s=Ai(s,ce),Bi(s),ne(),Ae(s),R(s,Ae)};t.addEventListener("click",s=>{const i=s.target.id;i&&(document.querySelectorAll(`.${y.notices__tab}`).forEach(l=>{l.classList.remove(y.active)}),s.target.classList.add(y.active),Fe=i,a())}),n.addEventListener("change",()=>{ce=n.value,a()}),o.addEventListener("input",()=>{G=o.value.trim().toLowerCase(),a()}),a()},Bi=e=>{const t=document.querySelector("#noticeTotalPostsNum");t.innerText=`총 게시글 수 ${e.length}개`,t.style.color="var(--gray-07)"},Ai=(e,t)=>{const n=e.filter(s=>s.isImportant===1),o=e.filter(s=>s.isImportant===0),a=t==="latest"?(s,i)=>new Date(i.createdAt)-new Date(s.createdAt):(s,i)=>new Date(s.createdAt)-new Date(i.createdAt);return n.sort(a),o.sort(a),[...n,...o]},Ne=V(),ji=async()=>{try{Ne.show();const e=await fetch("/api/notices");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();t.status==="OK"?Mi(t.data):console.error("Error fetching notices:",t.error)}catch(e){console.error("Failed to fetch notices:",e)}finally{Ne.hide()}},Fi=e=>{e.innerHTML=`
    <div class="${y.contents__notice}">
        <h1>공지사항</h1>
        <div class="${y.noticeContainer}">
        <div class="${y.contents__newBtnWrap}">
          <button id="moveNewNoticeBtn" data-color="secondary" data-shape="block">
                새 공지 등록
          </button>
        </div>
          <div class="${y.notices__tabs}">
            <button
              id = "event"
              class="${y.notices__tab} ${y["notices-tab-event"]}"
            >
              이벤트
            </button>
            <button
              id = "mileage"
              class="${y.notices__tab} ${y["notices-tab-mileage"]}"
            >
              마일리지
            </button>
            <button
              id = "approval"
              class="${y.notices__tab} ${y["notices-tab-approval"]}"
            >
              전자결재
            </button>
            <button
              id = "human-resource"
              class="${y.notices__tab} ${y["notices-tab-human-resource"]}"
            >
              인사행정
            </button>
            <button
              id = "education"
              class="${y.notices__tab} ${y["notices-tab-education"]}"
            >
              교육
            </button>
            <button
              id = "etc"
              class="${y.notices__tab} ${y["notices-tab-etc"]}"
            >
              기타
            </button>
          </div>
          <div class="${y.noticeContainer__filterWrap}">
            <div class="${y.noticeContainer__filter}">
              <input
                type="search"
                id="noticeSearchBox"
                name="q"
                placeholder="제목 또는 작성자를 입력해주세요."
                data-shape="line"
              />
            <select name="noticeFilter" id="noticeFilter">
              <option value="latest">최신순</option>
              <option value="old">오래된순</option>
            </select>
            </div>
            <h5 id="noticeTotalPostsNum"></h5>
          </div>
          <div class="${y.adminNoticeTable}">
              <table>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>첨부파일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody data-n-table-body></tbody>
              </table>
              <!-- 페이지네이션 구현하기 -->
              <div id="pagination" class="${ae.pagination}"></div>     
          </div>
        </div>
      </div>
  `,ji(),Ni()},Ni=()=>{const e=document.querySelector("#moveNewNoticeBtn");e&&e.addEventListener("click",t=>{history.pushState(null,null,"/admin/notices/add"),H()})},Vi="_noticeContainer_13adg_1",Pi="_contents__newBtnWrap_13adg_7",Ri="_noticeContainer__filterWrap_13adg_17",Zi="_userNoticeTable_13adg_24",zi="_noticeResponsive_13adg_83",Oi="_importantTag_13adg_88",Ui="_notices__tabs_13adg_98",Wi="_notices__tab_13adg_98",Ki="_active_13adg_118",Ji="_noticeContainer__filter_13adg_17",Qi="_noticeResponsive__attachment_13adg_165",f={noticeContainer:Vi,contents__newBtnWrap:Pi,noticeContainer__filterWrap:Ri,userNoticeTable:Zi,noticeResponsive:zi,importantTag:Oi,notices__tabs:Ui,notices__tab:Wi,active:Ki,noticeContainer__filter:Ji,noticeResponsive__attachment:Qi},Ve=e=>{const t=document.querySelector("[data-n-table-body]");if(t.innerHTML="",e.length===0){const n=document.createElement("tr"),o=document.createElement("td");o.colSpan=6,o.textContent="공지사항이 없습니다.",o.style.textAlign="center",o.style.padding="20px",n.appendChild(o),t.appendChild(n)}else e.forEach(n=>{const o=document.createElement("tr"),a=n.attachments!==null,s=n.isImportant===1,i=n.category;let l="";switch(i){case"event":l="이벤트";break;case"mileage":l="마일리지";break;case"education":l="교육";break;case"approval":l="전자결재";break;case"etc":l="기타";break;case"human-resource":l="인사행정";break;default:l="Unknown category.";break}o.innerHTML=`
              <td >${s?`<span class="${f.importantTag}">중요</span> `:n.id}</td>
              <td>${n.title}</td>
              <td>${n.author}</td>
              <td>${n.createdAt}</td>
              <td>${a?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':""}</td>
              <td>${n.views}</td>
              <td>
              <p>[${l}] ${n.title}</p>
                <div class="${f.noticeResponsive}">
                    <p>작성자:${n.author} / </p>
                    <p>작성일:${n.createdAt} / </p>
                    <p class="${f.noticeResponsive__attachment}">첨부파일:
                    ${a?'<img src="icons/textfile.svg" alt="file-icon" width="20" height="20" />':"없음"}
                    </p>
                </div>
          </td>
        `,t.appendChild(o),o.dataset.id=n.id,o.dataset.title=n.title,o.dataset.author=n.author,o.dataset.createdAt=n.createdAt,o.dataset.attachments=n.attachments?"true":"false",o.dataset.views=n.views,o.dataset.description=n.description,o.addEventListener("click",()=>{const r={id:o.dataset.id,title:o.dataset.title,author:o.dataset.author,createdAt:o.dataset.createdAt,attachments:o.dataset.attachments,views:o.dataset.views,description:o.dataset.description},m=new URLSearchParams(r).toString();history.pushState(null,null,`/user/notices/detail?${m}`),H()})})};let Pe=[],Re="event",de="latest",Y="";const Gi=e=>{Pe=e;const t=document.querySelector(`.${f.notices__tabs}`),n=document.querySelector("#noticeFilter"),o=document.querySelector("#noticeSearchBox");document.getElementById("event").classList.add(f.active),n.value=de;const a=()=>{let s=Pe.filter(i=>i.category===Re);Y&&(s=s.filter(i=>i.title.toLowerCase().includes(Y)||i.author.toLowerCase().includes(Y))),s=Xi(s,de),Yi(s),ne(),Ve(s),R(s,Ve)};t.addEventListener("click",s=>{const i=s.target.id;i&&(document.querySelectorAll(`.${f.notices__tab}`).forEach(l=>{l.classList.remove(f.active)}),s.target.classList.add(f.active),Re=i,a())}),n.addEventListener("change",()=>{de=n.value,a()}),o.addEventListener("input",()=>{Y=o.value.trim().toLowerCase(),a()}),a()},Yi=e=>{const t=document.querySelector("#noticeTotalPostsNum");t.innerText=`총 게시글 수 ${e.length}개`,t.style.color="var(--gray-07)"},Xi=(e,t)=>{const n=e.filter(s=>s.isImportant===1),o=e.filter(s=>s.isImportant===0),a=t==="latest"?(s,i)=>new Date(i.createdAt)-new Date(s.createdAt):(s,i)=>new Date(s.createdAt)-new Date(i.createdAt);return n.sort(a),o.sort(a),[...n,...o]},Ze=V(),er=async()=>{try{Ze.show();const e=await fetch("/api/notices");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();t.status==="OK"?Gi(t.data):console.error("Error fetching notices:",t.error)}catch(e){console.error("Failed to fetch notices:",e)}finally{Ze.hide()}},tr=e=>{e.innerHTML=`
  <div class="${f.contents__notice}">
      <h1>공지사항</h1>
      <div class="${f.noticeContainer}">
        <div class="${f.notices__tabs}">
          <button
            id = "event"
            class="${f.notices__tab} ${f["notices-tab-event"]}"
          >
            이벤트
          </button>
          <button
            id = "mileage"
            class="${f.notices__tab} ${f["notices-tab-mileage"]}"
          >
            마일리지
          </button>
          <button
            id = "approval"
            class="${f.notices__tab} ${f["notices-tab-approval"]}"
          >
            전자결재
          </button>
          <button
            id = "human-resource"
            class="${f.notices__tab} ${f["notices-tab-human-resource"]}"
          >
            인사행정
          </button>
          <button
            id = "education"
            class="${f.notices__tab} ${f["notices-tab-education"]}"
          >
            교육
          </button>
          <button
            id = "etc"
            class="${f.notices__tab} ${f["notices-tab-etc"]}"
          >
            기타
          </button>
        </div>
        <div class="${f.noticeContainer__filterWrap}">
            <div class="${f.noticeContainer__filter}">
              <input
              type="search"
              id="noticeSearchBox"
              name="q"
              placeholder="제목 또는 작성자를 입력해주세요."
              data-shape="line"
            />
            <select name="noticeFilter" id="noticeFilter">
              <option value="latest">최신순</option>
              <option value="old">오래된순</option>
            </select>
            </div>
            <h5 id="noticeTotalPostsNum"></h5>
          </div>
        <div class="${f.userNoticeTable}">
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>첨부파일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody data-n-table-body></tbody>
            </table>
            <!-- 페이지네이션 구현하기 -->
          <div id="pagination" class="${f.pagination}"></div>  
        </div>
      </div>
    </div>
`,er()},ar="_contents_1l8j1_1",or="_content__row_1l8j1_9",nr="_active_1l8j1_35",_={contents:ar,content__row:or,"approval-approve__tabs":"_approval-approve__tabs_1l8j1_17","approval-approve__tab":"_approval-approve__tab_1l8j1_17",active:nr,"active-undetermined":"_active-undetermined_1l8j1_50","active-approved":"_active-approved_1l8j1_54","active-rejected":"_active-rejected_1l8j1_58","approval-list":"_approval-list_1l8j1_62","approval-table":"_approval-table_1l8j1_71","approval-table__thead":"_approval-table__thead_1l8j1_84","approval-list__row":"_approval-list__row_1l8j1_116","approval-list__table":"_approval-list__table_1l8j1_130","approval-list__tbody":"_approval-list__tbody_1l8j1_131","approval-list__category":"_approval-list__category_1l8j1_135","approval-list__title":"_approval-list__title_1l8j1_138","approval-list__user":"_approval-list__user_1l8j1_141","approval-list__refusereason":"_approval-list__refusereason_1l8j1_144","approval-list__submitdate":"_approval-list__submitdate_1l8j1_147","approval-list__meida":"_approval-list__meida_1l8j1_150","approval-tr__date":"_approval-tr__date_1l8j1_154","no-data-message":"_no-data-message_1l8j1_157"},sr=e=>({modal_id:`approvaladminnull_${e.id}`,header:`${e.title}`,content:`
    <div class="modal-box__form">
      <input data-a-id
        data-shape="line"
        type="text"
        value='${e.id}'
        readonly
        style="display: none;"/>
      <div class="form-group">
        <h5>카테고리</h5>
        <input data-a-category
          data-shape="line"
          type="text"
          value='${e.category}'
          readonly/>
      </div>

      <div class="form-group">
        <h5>신청날짜</h5>
        <input data-shape="line" type="text" value='${e.startdate} - ${e.enddate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청자</h5>
        <input data-a-user data-shape="line" type="text" value='${e.user}' readonly />
      </div>

      <div class="form-group">
        <h5>신청일자</h5>
        <input data-a-submitdate
          data-shape="line"
          type="text"
          value='${e.submitdate}'
          readonly/>
      </div>

      <div class="form-group">
        <h5>신청사유</h5>
        <input data-a-submitreason
          data-shape="line"
          type="text"
          value='${e.submitreason}'
          readonly/>
      </div>
            
      <div class="form-group">
        <h5>거절사유</h5>
        <textarea data-a-refusereason placeholder="내용을 입력해 주세요" maxlength="100"></textarea>
      </div>
    </div>

    <div class="modal-box__review-btns">
      <button data-approvalreject-btn
        id="reject-btn"
        class="modal-box__button"
        data-color="positive"
        data-shape="line">
        거절하기
      </button>
      <button data-approvalapproval-btn
        id="approve-btn"
        class="modal-box__button"
        data-color="positive"
        data-shape="block">
          수락하기
      </button>
    </div>
  `}),ir=e=>({modal_id:`approvaladmin0_${e.id}`,header:`${e.title}`,content:`
    <div class="modal-box__form">
      <input data-a-id
        data-shape="line"
        type="text"
        value='${e.id}'
        readonly
        style="display: none;"/>
      <div class="form-group">
        <h5>카테고리</h5>
        <input data-a-category
          data-shape="line"
          type="text"
          value='${e.category}'
          readonly/>
      </div>

      <div class="form-group">
        <h5>신청날짜</h5>
        <input data-shape="line" type="text" value='${e.startdate} - ${e.enddate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청자</h5>
        <input data-a-user data-shape="line" type="text" value='${e.user}' readonly />
      </div>

      <div class="form-group">
        <h5>신청일자</h5>
        <input data-a-submitdate
          data-shape="line"
          type="text"
          value='${e.submitdate}'
          readonly/>
      </div>

      <div class="form-group">
        <h5>신청사유</h5>
        <input data-a-submitreason
          data-shape="line"
          type="text"
          value='${e.submitreason}'
          readonly/>
      </div>
            
      <div class="form-group">
        <h5>거절사유</h5>
        <input data-a-refusereason
          data-shape="line"
          type="text"
          value='${e.refusereason}'
          readonly/>
      </div>
    </div>
        `}),rr=e=>({modal_id:`approvaladmin1_${e.id}`,header:`${e.title}`,content:`
    <div class="modal-box__form">
      <input data-a-id
        data-shape="line"
        type="text"
        value='${e.id}'
        readonly
        style="display: none;"/>
      <div class="form-group">
        <h5>카테고리</h5>
        <input data-a-category
          data-shape="line"
          type="text"
          value='${e.category}'
          readonly/>
      </div>

      <div class="form-group">
        <h5>신청날짜</h5>
        <input data-shape="line" type="text" value='${e.startdate} - ${e.enddate}' readonly />
      </div>

      <div class="form-group">
        <h5>신청자</h5>
        <input data-a-user data-shape="line" type="text" value='${e.user}' readonly />
      </div>

      <div class="form-group">
        <h5>신청일자</h5>
        <input data-a-submitdate
          data-shape="line"
          type="text"
          value='${e.submitdate}'
          readonly/>
      </div>

      <div class="form-group">
        <h5>신청사유</h5>
        <input data-a-submitreason
          data-shape="line"
          type="text"
          value='${e.submitreason}'
          readonly/>
      </div>
    </div>
        `}),lr=e=>{if(e.hasAttribute("data-event-attached"))return;const t=()=>{const i=document.querySelector("#modal__background");e.classList.remove("active"),i==null||i.classList.remove("active"),document.removeEventListener("click",o)},n=async(i,l,r)=>{const m=new FormData;m.append("id",l),m.append("isApprove",i.toString()),i||m.append("refusereason",r);try{const h=await fetch(`/api/approval/${l}`,{method:"PUT",body:m});if(!h.ok)throw new Error(`HTTP error! status: ${h.status}`);const g=await h.json();console.log(g.message),alert(i?"전자결재가 승인되었습니다.":"전자결재가 거절되었습니다."),t(),et()}catch(h){console.error("Error updating approval:",h),alert("승인/거절 처리 중 오류가 발생했습니다.")}},o=async i=>{const l=i.target;if(l.matches("[data-approvalapproval-btn]")){i.preventDefault();const r=e.querySelector("[data-a-id]").value;await n(!0,r)}else if(l.matches("[data-approvalreject-btn]")){i.preventDefault();const r=e.querySelector("[data-a-id]").value,m=e.querySelector("[data-a-refusereason]").value;await n(!1,r,m)}};e.addEventListener("click",o);const a=e.querySelector(".close-modal");a&&a.addEventListener("click",t);const s=document.querySelector("#modal__background");s&&s.addEventListener("click",t),e.setAttribute("data-event-attached","true")},Xe=e=>{const t=document.querySelector(`.${_["approval-list"]}`);if(t.innerHTML="",e.length===0){const n=document.createElement("p");n.textContent="전자결재 내역이 없습니다",n.className=_["no-data-message"],t.appendChild(n)}else{const n=document.createElement("table");n.className=_["approval-list__table"];const o=document.createElement("tbody");o.className=_["approval-list__tbody"],n.appendChild(o),e.forEach(a=>{const s=document.createElement("tr");s.className=_["approval-list__row"],s.classList.add("open-modal"),a.isApprove===null?s.setAttribute("data-modal-target",`#modal-approvaladminnull_${a.id}`):a.isApprove===1?s.setAttribute("data-modal-target",`#modal-approvaladmin1_${a.id}`):s.setAttribute("data-modal-target",`#modal-approvaladmin0_${a.id}`),s.innerHTML=`
      <td class="${_["approval-list__category"]}">${a.category}</td>
      <td class="${_["approval-list__title"]}">${a.title}</td>
      <td class="${_["approval-list__user"]}">${a.user}</td>
      <td class="${_["approval-list__refusereason"]}">${a.refusereason}</td>
      <td class="${_["approval-list__submitdate"]}">${a.submitdate}</td>
      <td class="${_["approval-list__meida"]}">
        <p>[${a.startdate} ~ ${a.enddate}] ${a.title}</p><br>
        <p>반려사유:${a.refusereason}</p><br>
        <p class="${_["approval-tr__date"]}">${a.submitdate}</p>
      </td>
    `,o.appendChild(s)}),t.appendChild(n),e.forEach(a=>{const s=sr(a);N(s.modal_id,s.header,s.content);const i=document.querySelector(`#modal-approvaladminnull_${a.id}`);lr(i)}),e.forEach(a=>{const s=rr(a);N(s.modal_id,s.header,s.content)}),e.forEach(a=>{const s=ir(a);N(s.modal_id,s.header,s.content)})}},cr=e=>{const t=document.querySelector(`.${_["approval-approve__tabs"]}`),n=document.querySelector("#filter"),o=document.querySelector("#filter_date");let a=null,s="all",i="latest",l=e.filter(r=>a===null?r.isApprove!==0&&r.isApprove!==1:r.isApprove===(a?1:0));document.getElementById("undetermined").classList.add(_.active),R(l,Xe),t.addEventListener("click",r=>{const m=r.target.id;if(document.querySelectorAll(`.${_["approval-approve__tab"]}`).forEach(h=>{h.classList.remove(_.active)}),m==="undetermined")r.target.classList.add(_.active),a=null;else if(m==="approved")r.target.classList.add(_.active),a=!0;else if(m==="rejected")r.target.classList.add(_.active),a=!1;else return;ne(),_e(e,a,s,i)}),n.addEventListener("change",r=>{s=r.target.value,_e(e,a,s,i)}),o.addEventListener("change",r=>{i=r.target.value,_e(e,a,s,i)})},_e=(e,t,n,o)=>{let a=e.filter(s=>t===null?s.isApprove!==0&&s.isApprove!==1:s.isApprove===(t?1:0));n!=="all"&&(a=a.filter(s=>s.category===n)),o==="latest"?a.sort((s,i)=>new Date(i.submitdate)-new Date(s.submitdate)):o==="old"&&a.sort((s,i)=>new Date(s.submitdate)-new Date(i.submitdate)),R(a,Xe)},ze=V(),et=async()=>{try{ze.show();const t=await(await fetch("/api/approval")).json();t.status==="OK"?cr(t.data):console.error("Error in Approval data:",t.error)}catch(e){console.error("Failed to fetch Approval data:",e)}finally{ze.hide()}},dr=e=>{e.innerHTML=`
  <div class="${_.contents}">
        <!-- 페이지 타이틀 -->
        <h1>전자결재</h1>
        <div class="${_.content__row}">
          <!-- tap형식 버튼 -->
          <div data-approve-tabs class="${_["approval-approve__tabs"]}">
            <button
              id="undetermined"
              data-approve-tab
              class="${_["approval-approve__tab"]} ${_["approval-approve__tab--undetermined"]}"
            >
              심사중
            </button>
            <button 
              id="approved"
              data-approve-tab
              class="${_["approval-approve__tab"]} ${_["approval-approve__tab--approved"]}">
              승인
            </button>
            <button 
              id="rejected"
              data-approve-tab
              class="${_["approval-approve__tab"]} ${_["approval-approve__tab--rejected"]}">
              반려
            </button>
          </div>
        </div>        

        <!-- 카테고리 selectbox -->
        <div class="${_.content__row}">
          <div class="${_["approval-category__filter"]}">
            <select id="filter">
              <option value="all">카테고리 전체</option>
              <option value="반차">반차</option>
              <option value="연차">연차</option>
              <option value="조퇴">조퇴</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div class="${_["approval-date__filter"]}">
            <select id="filter_date">
              <option value="latest">최신순</option>
              <option value="old">오래된순</option>
            </select>
          </div>
        </div>

        <table class="${_["approval-table"]}">
          <thead class="${_["approval-table__thead"]}">
            <tr class="${_["approval-table__tr"]}">
              <th class="${_["approval-th__category"]}">종류</th>
              <th class="${_["approval-th__title"]}">제목</th>
              <th class="${_["approval-th__user"]}">요청자</th>
              <th class="${_["approval-th__refusereason"]}">반려사유</th>
              <th class="${_["approval-th__submitdate"]}">신청일</th>
            </tr>
          </thead>
        </table>
        
        <div class="${_["approval-list"]}"></div>
        
        <!-- 페이지네이션 구현하기 -->
        <div id="pagination" class="${_.pagination}"></div>
  </div>`,et();const t=document.querySelectorAll("[data-approve-tab]"),n=document.querySelector("[data-approve-tabs]");t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(a=>a.classList.remove("active")),o.classList.add("active"),n.classList.remove(_["active-undetermined"],_["active-approved"],_["active-rejected"]),n.classList.add(_[`active-${o.id}`])})})},_r=e=>{e.innerHTML=`
  <div class="${u.contents}">
        <!-- 페이지 타이틀 -->
        <h1>전자결재</h1>
        <div class="${u.content__row}">
          <!-- tap형식 버튼 -->
          <div data-approve-tabs class="${u["approval-approve__tabs"]}">
            <button
              id="undetermined"
              data-approve-tab
              class="${u["approval-approve__tab"]} ${u["approval-approve__tab--undetermined"]}"
            >
              심사중
            </button>
            <button 
              id="approved"
              data-approve-tab
              class="${u["approval-approve__tab"]} ${u["approval-approve__tab--approved"]}">
              승인
            </button>
            <button 
              id="rejected"
              data-approve-tab
              class="${u["approval-approve__tab"]} ${u["approval-approve__tab--rejected"]}">
              반려
            </button>
          </div>
          <!-- 결제신청 모달 버튼 -->
          <button class="${u.paymentRequest} open-modal" data-modal-target="#modal-approval_1" >
            결재 신청
          </button>
        </div>        

        <!-- 카테고리 selectbox -->
        <div class="${u.content__selectboxrow}">
          <div class="${u["approval-category__filter"]}">
            <select id="filter">
              <option value="all">카테고리 전체</option>
              <option value="반차">반차</option>
              <option value="연차">연차</option>
              <option value="조퇴">조퇴</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div class="${u["approval-date__filter"]}">
            <select id="filter_date">
              <option value="latest">최신순</option>
              <option value="old">오래된순</option>
            </select>
          </div>
        </div>

        <table class="${u["approval-table"]}">
          <thead class="${u["approval-table__thead"]}">
            <tr class="${u["approval-table__tr"]}">
              <th class="${u["approval-th__category"]}">종류</th>
              <th class="${u["approval-th__title"]}">제목</th>
              <th class="${u["approval-th__submitdate"]}">신청일</th>
            </tr>
          </thead>
        </table>
        
        <div class="${u["approval-list"]}" id="approval-list"></div>
        
        <!-- 페이지네이션 구현하기 -->
        <div id="pagination" class="${u.pagination}"></div>
  </div>`,Qe(),N(se().modal_id,se().header,se().content,We);const t=document.querySelectorAll("[data-approve-tab]"),n=document.querySelector("[data-approve-tabs]");t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(a=>a.classList.remove("active")),o.classList.add("active"),n.classList.remove(u["active-undetermined"],u["active-approved"],u["active-rejected"]),n.classList.add(u[`active-${o.id}`])})})},pr="_noticeDetail_1wfaz_1",ur="_noticeDetail__description_1wfaz_7",hr="_noticeDetail__btnContainer_1wfaz_11",mr="_noticeDetail__backBtn_1wfaz_18",vr="_noticeDetail__info_1wfaz_22",gr="_noticeDetail__items_1wfaz_28",br="_attachedFile_1wfaz_36",yr="_noticeTitle_1wfaz_46",fr="_registrationDate_1wfaz_50",$r="_writer_1wfaz_51",wr="_views_1wfaz_52",S={noticeDetail:pr,noticeDetail__description:ur,noticeDetail__btnContainer:hr,noticeDetail__backBtn:mr,noticeDetail__info:vr,noticeDetail__items:gr,attachedFile:br,noticeTitle:yr,registrationDate:fr,writer:$r,views:wr},Cr=()=>{const e=new URLSearchParams(window.location.search),t={id:e.get("id"),title:e.get("title"),author:e.get("author"),createdAt:e.get("createdAt"),attachments:e.get("attachments"),views:e.get("views"),description:e.get("description")},n=document.querySelector(`.${S.noticeTitle}`),o=document.querySelector(`.${S.registrationDate}`),a=document.querySelector(`.${S.writer}`),s=document.querySelector(`.${S.views}`),i=document.querySelector(`.${S.attachedFile}`),l=document.querySelector(`.${S.noticeDetail__description}`);n.textContent=t.title,o.textContent=t.createdAt,a.textContent=t.author,s.textContent=t.views,l.textContent=t.description,t.attachments==="true"&&(i.innerHTML=`
    <img
      src="icons/textfile.svg"
      alt="file-icon"
      width="20"
      height="20"
    />
    `)},Dr=()=>{document.querySelector("[data-n-delete]").addEventListener("click",async()=>{const n=new URLSearchParams(window.location.search).get("id");if(!n){console.error("Notice ID not found");return}if(confirm("정말로 이 공지사항을 삭제하시겠습니까?"))try{const o=await fetch(`/api/notices/${n}`,{method:"DELETE"});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);(await o.json()).status==="OK"?(alert("공지사항이 성공적으로 삭제되었습니다."),window.location.href="/admin/notices"):alert("공지사항 삭제에 실패했습니다.")}catch(o){console.error("Failed to delete notice:",o),alert("공지사항 삭제 중 오류가 발생했습니다.")}})},Sr=e=>{e.innerHTML=`
       <div data-edit-dom class="${S.noticeDetail}">
        <div class="${S.noticeDetail__btnContainer}">
          <button data-n-delete data-color="warning" data-shape="line" class="${S.noticeDetail__deleteBtn}">삭제하기</button>
          <button data-color="neutral" data-shape="line" class="${S.noticeDetail__backBtn}">뒤로가기</button>
        </div>
        <h2 class="${S.noticeTitle}"></h2>
          <ul class="${S.noticeDetail__info}">
            <li class=${S.noticeDetail__items}>
              <h5>등록일</h5>
              <h5 class="${S.registrationDate}"></h5>
            </li>
            <li class=${S.noticeDetail__items}>
              <h5>작성자</h5>
              <h5 class="${S.writer}"></h5>
            </li>
            <li class=${S.noticeDetail__items}>
              <h5>조회수</h5>
              <h5 class="${S.views}"></h5>
            </li>
            <li class=${S.noticeDetail__items}>
              <h5>첨부파일</h5>
              <div class="${S.attachedFile}"></div>
            </li>
          </ul>
          <h4 class="${S.noticeDetail__description}"></h4>
        </div>
  `,Cr(),Dr(),Lr()},Lr=()=>{document.querySelector(`.${S.noticeDetail__backBtn}`).addEventListener("click",()=>{history.back()})},Tr="_noticeDetail_irjmh_1",kr="_noticeDetail__description_irjmh_7",xr="_noticeDetail__btnContainer_irjmh_11",Er="_noticeDetail__backBtn_irjmh_17",Ir="_noticeDetail__info_irjmh_21",Hr="_noticeDetail__items_irjmh_27",qr="_attachedFile_irjmh_35",Mr="_noticeTitle_irjmh_45",Br="_registrationDate_irjmh_49",Ar="_writer_irjmh_50",jr="_views_irjmh_51",L={noticeDetail:Tr,noticeDetail__description:kr,noticeDetail__btnContainer:xr,noticeDetail__backBtn:Er,noticeDetail__info:Ir,noticeDetail__items:Hr,attachedFile:qr,noticeTitle:Mr,registrationDate:Br,writer:Ar,views:jr},Fr=()=>{const e=new URLSearchParams(window.location.search),t={id:e.get("id"),title:e.get("title"),author:e.get("author"),createdAt:e.get("createdAt"),attachments:e.get("attachments"),views:e.get("views"),description:e.get("description")},n=document.querySelector(`.${L.noticeTitle}`),o=document.querySelector(`.${L.registrationDate}`),a=document.querySelector(`.${L.writer}`),s=document.querySelector(`.${L.views}`),i=document.querySelector(`.${L.attachedFile}`),l=document.querySelector(`.${L.noticeDetail__description}`);n.textContent=t.title,o.textContent=t.createdAt,a.textContent=t.author,s.textContent=t.views,l.textContent=t.description,t.attachments==="true"?i.innerHTML=`
    <img
      src="icons/textfile.svg"
      alt="file-icon"
      width="20"
      height="20"
    />
    `:i.innerHTML='("없음")'},Nr=e=>{e.innerHTML=`
        <div class="${L.noticeDetail}">
        <div class="${L.noticeDetail__btnContainer}">
          <button data-color="neutral" data-shape="line" class="${L.noticeDetail__backBtn}">뒤로가기</button>
        </div>
        <h2 class="${L.noticeTitle}"></h2>
          <ul class="${L.noticeDetail__info}">
            <li class=${L.noticeDetail__items}>
              <h5>등록일</h5>
              <h5 class="${L.registrationDate}"></h5>
            </li>
            <li class=${L.noticeDetail__items}>
              <h5>작성자</h5>
              <h5 class="${L.writer}"></h5>
            </li>
            <li class=${L.noticeDetail__items}>
              <h5>조회수</h5>
              <h5 class="${L.views}"></h5>
            </li>
            <li class=${L.noticeDetail__items}>
              <h5>첨부파일</h5>
              <div class="${L.attachedFile}"></div>
            </li>
          </ul>
          <h4 class="${L.noticeDetail__description}"></h4>
        </div>
  `,Vr(),Fr()},Vr=()=>{document.querySelector(`.${L.noticeDetail__backBtn}`).addEventListener("click",()=>{history.back()})},Pr="_contents_1thys_1",Rr="_btnWrap_1thys_7",Zr="_info_1thys_14",zr="_info__items_1thys_20",Or="_uploadButton_1thys_44",A={contents:Pr,btnWrap:Rr,info:Zr,info__items:zr,uploadButton:Or},Ur=()=>{const e=sessionStorage.getItem("userName")||"",t=document.querySelector("[data-add-btn]"),n=document.querySelector("[data-n-file]"),o=document.querySelector("[data-n-file-info]"),a=document.querySelector(`.${A.uploadButton}`),s=document.querySelector("[data-n-remove-file]"),i=document.querySelector("[data-n-title]"),l=document.querySelector("[data-n-toggle]"),r=document.querySelector("[data-n-description]"),m=document.querySelector("select[name='category']");(()=>{const I=localStorage.getItem("selectedFileName");I?(o.textContent=I,s.style.display="flex"):(o.textContent="",s.style.display="none")})();const g=()=>i.value.trim()?r.value.trim()?!0:(alert("내용을 입력해주세요."),!1):(alert("제목을 입력해주세요."),!1);a.addEventListener("click",I=>{I.preventDefault(),n.click()}),n.addEventListener("change",()=>{if(console.log("ddd"),n.files.length>0){const I=n.files[0].name;o.textContent=`선택된 파일: ${I}`,s.style.display="flex",localStorage.setItem("selectedFileName",I)}else o.textContent="",s.style.display="none",localStorage.removeItem("selectedFileName")}),s.addEventListener("click",I=>{I.preventDefault(),n.value="",o.textContent="",s.style.display="none",localStorage.removeItem("selectedFileName")});const C=async I=>{if(I.preventDefault(),!g())return;const M=new FormData;M.append("title",i.value),M.append("author",e),M.append("isImportant",l.checked?"0":"1"),M.append("description",r.value),M.append("category",m.value),n&&n.files&&n.files.length>0?(M.append("attachments",n.files[0]),M.append("hasAttachment",1)):M.append("hasAttachment",0);try{const P=await fetch("/api/notices",{method:"POST",body:M});if(!P.ok)throw new Error(`HTTP error! status: ${P.status}`);(await P.json()).status==="OK"?(alert("공지사항이 성공적으로 등록되었습니다."),localStorage.removeItem("selectedFileName"),window.location.href="/admin/notices"):alert("공지사항 등록에 실패했습니다.")}catch(P){console.error("Failed to register notice:",P),alert("공지사항 등록 중 오류가 발생했습니다.")}};t.addEventListener("click",C)},Wr=e=>{if(!e){console.error("container element not found");return}e.innerHTML=`
        <h1>새 공지사항 등록</h1>
            <div class="${A.btnWrap}">
                <button data-cancel-btn class="${A.btnWrap__cancel}" data-color="secondary" data-shape='line'>작성취소</button>
                <button data-add-btn class="${A.btnWrap__add}" data-color="secondary" data-shape='block'>등록</button>
            </div>
        <section class="${A.contents}">
            <input data-n-title data-shape='underline' type="text" placeholder="제목을 입력해주세요." style="width: 100%;"></input>
            <ul class="${A.info}">
                <li class="${A.info__items}">
                    <h5>카테고리</h5>
                    <select data-n-select name="category" required>
                        <option value="event">이벤트</option>
                        <option value="mileage">마일리지</option>
                        <option value="approval">전자결재</option>
                        <option value="hr">인사행정</option>
                        <option value="education">교육</option>
                        <option value="etc">기타</option>
                    </select>
                </li>
                <li class="${A.info__items}">
                    <h5>필수공지로 등록</h5>
                    <div class="${W.header__toggle}">
                        <label class="${W.switch}">
                            <input data-n-toggle type="checkbox" id="toggleSwitch" />
                            <span class="${W.slider}"></span>
                        </label>
                        <h4 id="toggleText">필수</h4>
                    </div>
                </li>
                <li class="${A.info__items}">
                    <h5>첨부파일</h5>
                    <div class="${A.info__addFile}">
                        <button class="${A.uploadButton}">파일선택</button>
                        <input data-n-file type="file" class="${A.fileInput}" class="hidden">
                        <div data-n-file-info></div>
                        <button data-n-remove-file class="${A.removeFileButton}" style="display:none;">파일 삭제
                            <img src="icons/close.svg" />
                        </button>
                    </div>
                </li>
            </ul>
            <textarea data-n-description data-shape='transparent'placeholder="내용을 입력해주세요."></textarea>
        </section>
  `,Kr(),Ye(),Ur()},Kr=()=>{document.querySelector("[data-cancel-btn]").addEventListener("click",()=>{history.back()})},H=()=>{let e=window.location.pathname;nt()||(history.pushState(null,null,"/"),e=window.location.pathname),!e.includes(pe())&&e!=="/"&&(history.pushState(null,null,"/unauthorized"),e=window.location.pathname);const t=document.querySelector("#root");it(t);const n=document.querySelector("#responsive-nav"),o=document.querySelector("#nav"),a=document.querySelector("#contents");switch(e.includes("user")?(Nt(o,[{path:"/user/dashboard",label:"대시보드"},{path:"/user/approval",label:"전자결재"},{path:"/user/notices",label:"공지사항"},{path:"/user/mileage",label:"마일리지"},{path:"/user/mypage",label:"마이페이지"}]),At(n)):e.includes("admin")&&(Ft(o,[{path:"/admin/dashboard",label:"대시보드"},{path:"/admin/approval",label:"전자결재 관리"},{path:"/admin/employee",label:"직원 관리"},{path:"/admin/mileage",label:"마일리지 관리"},{path:"/admin/notices",label:"공지사항 관리"}]),Ct(n)),e){case"/":_t(t);break;case"/user/dashboard":No(a);break;case"/user/approval":_r(a);break;case"/user/notices":tr(a);break;case"/user/notices/detail":Nr(a);break;case"/user/mileage":Qo(a);break;case"/user/mileage/history":pn(a);break;case"/user/mypage":Ys(a);break;case"/user/mypage/editpage":wi(a);break;case"/admin/dashboard":Da(a);break;case"/admin/approval":dr(a);break;case"/admin/employee":rs(a);break;case"/admin/employee/add":js(a);break;case"/admin/employee/edit":Vs(a);break;case"/admin/mileage":Jo(a);break;case"/admin/notices":Fi(a);break;case"/admin/notices/detail":Sr(a);break;case"/admin/notices/add":Wr(a);break;case"/unauthorized":we(t);default:we(t);break}},Jr=e=>{const t=e.target.closest("a");t!=null&&t.href&&(e.preventDefault(),history.pushState(null,null,t.href),H())},Qr=()=>{window.addEventListener("popstate",H),document.body.addEventListener("click",Jr),H()};document.addEventListener("DOMContentLoaded",Qr);
