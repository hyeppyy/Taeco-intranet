import styles from "./Dashboard.module.css";
import noticesData from "./JS/NoticeData";
import renderModal from "../../../Components/Modal/RenderModal";
import {
  showCheckInTimeContent,
  showCheckOutTimeContent,
} from "./Modal/TimerModalContent";
import timer from "./JS/Timer";

const renderUserDashboard = (container) => {
  container.innerHTML = `
    <div class="${styles.dashboardCon}">
        <!-- 페이지 타이틀 -->
        <h1>대시보드</h1>
        <div class="${styles.userDashboard}">
          <div class="${styles.userDashboard__profileCard}">
            <div class="${styles.profileImg}">
              <img src="/public/images/_Avatar_.png" alt="profileimg" />
            </div>
            <div class="${styles.info}">
              <h2>Welcome Back,</h2>
              <div class="${styles.infoFirst}">
                <h2 class="${styles.infoFirst__name}">홍길동</h2>
                <h4 class="${styles.infoFirst__position}">차장</h4>
              </div>
              <div class="${styles.infoSecond}">
                <img src="/public/icons/email.svg" alt="email" />
                <h4 class="${styles.email}">honggildong@google.com</h4>
                <img src="/public/icons/call.svg" alt="call" />
                <h4 class="${styles.call}">010-1234-5678</h4>
              </div>
            </div>
          </div>
          <div class="${styles.userDashboard__attendance}">
            <div class="${styles.userDashboard__todayAttendance} ${styles.card}">오늘의 출근</div>
            <div class="${styles.userDashboard__attendanceHistory} ${styles.card}">
              내출결내역확인
            </div>
          </div>
          <div class="${styles.userDashboard__approval} ${styles.card}">전자결재영역(승민)</div>
          <div class="${styles.userDashboard__notice} ${styles.card}">
            <div class="${styles.userDashboard__noticeContainer}">
              <div class="${styles.userDashboard__noticeTitle}">
                <h2>공지사항</h2>
                <h4>최근 3개만 보여집니다.</h4>
              </div>
            </div>
            <table class="${styles.noticeTable}">
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
              <tbody class="${styles.noticeTable__tbody}"></tbody>
            </table>   
          </div>
        </div>
      </div>
  `;

  noticesData();
};

export default renderUserDashboard;
