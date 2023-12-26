import Head from "next/head";

const SEOConfig = () => {
  return (
    <head>
      <title>JOBIS</title>
      <meta name="description" content="취업의 지름길" />
      <meta
        name="description"
        content="대덕소프트웨어마이스터고등학교 채용 관리 서비스"
      />
      <meta name="author" content="retrun" />
      <meta
        name="keyword"
        content="JOBIS, jobis, 자비스, 자비츠, DSM, dsm, 대덕소프트웨어마이스터고등학교, 학생, 취업, 채용"
      />

      <meta name="og:site_name" content="JOBIS" />
      <meta name="og:title" content="JOBIS" />
      <meta
        name="og:description"
        content="대덕소프트웨어마이스터고등학교 채용 관리 서비스"
      />
      <meta
        name="og:description"
        content="대덕소프트웨어마이스터고등학교 취업 관리 서비스"
      />
      <meta name="og:url" content="https://jobis-student.team-return.com" />
      <meta
        name="og:image"
        content="https://jobis-student.team-return.com/favicon.ico"
      />
      <meta name="og:type" content="website" />
    </head>
  );
};

export default SEOConfig;
