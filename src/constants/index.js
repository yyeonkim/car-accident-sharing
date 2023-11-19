const MESSAGE = {
  SELECT_USER: "서비스 이용 목적을 선택해주세요",
  RECEIVED_TITLE: "접수되었습니다.",
  RECEIVED_DETAIL: "분석이 완료되는 대로 알려드리겠습니다.",
  CONFIRM: "확인",
  ANALYSIS_RESULT: "분석 결과",
  MOST_FAULT_RATE: "최다 과실비율",
  FAULT_RATE: "과실비율",
  INSURER_ANALYSIS: "보험사 분석",
  VIEW_STATISTICS: "통계 보기",
  RATE_ANALYSIS: "비율 통계",
  UPLOAD_ERROR: "영상을 업로드하지 못했습니다. 다시 시도해주세요 🥲",
  UPLOAD_TITLE: "교통사고 영상을 올려주세요",
  UPLOAD_SUBTITLE: "전문가에게 분석받고 싶은",
  REGISTERED: "등록되었습니다",
  PREDICTION_RATIO: "예측 비율",
  OPINION: "의견",
  COMPLETE: "완료",
  EMPTY_VIDEO: "아직 영상이 없습니다.",
};

const DB = {
  VIDEO: "video",
};

const LINK = {
  VIDEO: (name) =>
    `https://firebasestorage.googleapis.com/v0/b/gongcha-2b0f0.appspot.com/o/${name}?alt=media`,
  THUMBNAIL:
    "https://images.unsplash.com/photo-1627398621460-914da4e7d46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
};

export { MESSAGE, LINK, DB };
