export default function getClassName(classId: number) {
  switch (classId) {
    case 1:
      return "소프트웨어 개발 1반";

    case 2:
      return "소프트웨어 개발 2반";

    case 3:
      return "임베디드 소프트웨어과";

    case 4:
      return "인공지능 소프트웨어과";

    default:
      return "기타";
  }
}
