# [Week 2] Best Practice of Wanted Pre-onboarding Assignment

원티드 프리온보딩 인턴십 3팀 3주차 개인과제입니다.

## 🚀 배포 링크

배포
링크: [시계열 차트 사이트](http://time-chart.s3-website.ap-northeast-2.amazonaws.com/)

<br/>

## 🎬 프로젝트 로컬 실행 방법

```
 git clone https://github.com/taegeun1111/time-chart.git
 npm install
 npm start
```

<br/>

## 🛠️ 기술 스택

<div>
   <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
   <br/>
   <img src="https://img.shields.io/badge/Recharts-1facb7?style=flat&logoColor=white">
   <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=amazons3&logoColor=white">
   <img src="https://img.shields.io/badge/husky-efefef?style=flat&logo=husky&logoColor=white">
   <img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat&logo=eslint&logoColor=white">
   <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white">

</div>

<br/>

## 📝 요구 사항

### **[Assignment 0] 시계열 차트 만들기**

> - 주어진 JSON 데이터의 key값(시간)을 기반으로 시계열 차트를 구현
> - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프 구현
> - Area 그래프의 기준값은 value_area 값을 이용
> - Bar 그래프의 기준값은 value_bar 값을 이용
> - 차트의 Y축에 대략적인 수치를 표현

#### **구현 방법**

사용 기술 : Recharts

1. 복합 그래프 구현

- axios로 받아오는 JSON data를 `useChartData` 커스텀 훅을 만들어 데이터를 가공해준 후 JSON 데이터의 key 값을 x축으로 설정하여 복합 그래프를 구현했습니다.

  <details>
  <summary>코드보기</summary>

  ```ts
    index.interceptors.request.use(
  const useChartData = () => {
    const [chartData, setChartData] = useState<IChart[]>([]);
    const getChart = async () => {
      const data: IResponseData = await httpClient();
      const updateData: IChart[] = Object.entries(data).map(([time, data]) => ({
        time: new Date(time).toLocaleTimeString(),
        ...data,
      }));
      setChartData(updateData);
    };

    useEffect(() => {
      getChart();
    }, []);

    const chartUniqueLocation = [...new Set(chartData.map(chart => chart.id))].sort();

    return {chartData, chartUniqueLocation};
  };

  export default useChartData;
      );
  ```

  </details>

2. 차트의 Y축에 수치를 표현

- Y축을 식별하는 데 사용되는 `yAxisId` Y축에 수치를 표현하고, 추가 범위 설정히 필요한 Y축의 경우에 `domain` 속성을 이용하여 범위를 설정하였습니다.

    <details>
    <summary>코드보기</summary>

  ```ts
      <YAxis
        yAxisId='left'
        label={{
          value: VALUE_AREA_KEY,
          angle: -90,
          position: 'insideLeft',
          offset: 10,
        }}
        domain={[0, 200]}
        tick={{fontSize: 15}}
      />
      <YAxis
        yAxisId='right'
        orientation='right'
        label={{
          value: VALUE_BAR_KEY,
          angle: 90,
          position: 'insideRight',
          offset: -10,
        }}
        tick={{fontSize: 15}}
      />
  ```

    </details>
  <br />

### **[Assignment 1] 호버 기능 구현**

> - 특정 데이터 구역에 마우스 호버시 id, value_area, value_bar 데이터를 툴팁 형태로 제공

#### **구현 방법**

사용 기술 : Recharts

1. Hover

- `content` 속성을 통해 툴팁의 내용을 정의하고 내용은 <CustomTooltip> 컴포넌트로 지정해 구현했습니다.

  <details>
  <summary>코드보기</summary>

  ```ts
   <Tooltip
      content={
        <CustomTooltip
          active={false}
          payload={{id: '', value_area: 0, value_bar: 0}}
        />
      }
    />

  //CustomTooltop Component
  const CustomTooltip = ({active, payload}: any) => {
  if (active && payload) {
    return (
      <StyledCustomTooltip>
        <p className='location'>{`${payload[0].payload.id}`}</p>
        {payload.map((data: any, index: number) => (
          <p key={index} style={{color: data.color}}>
            {`${data.name}: ${data.value}`}
          </p>
        ))}
      </StyledCustomTooltip>
    );
  }

  return null;
  };
  ```

  </details>

### **[Assignment 2] 필터링 기능**

> - 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
> - 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
> - 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리
> - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

#### **구현 방법**

사용 기술 : Recharts, Props 전달

1. 하이라이팅

- 부모 컴포넌트인 `<Home />`에서 하나의 Toggle 핸들러를 공유하는 방식으로 자식 컴포넌트들에게 Props를 전달하여 state를 관리 했습니다

  <details>
  <summary>코드보기</summary>

  ```ts
    const Home = () => {
    const {chartUniqueLocation} = useChartData();
    const [selectedLocation, setSelectedLocation] = useState('');

    const locationToggleHandler = (id: string) => {
      if (id === selectedLocation) {
        setSelectedLocation('');
     } else {
       setSelectedLocation(id);
      }
    };
    return (
    <>
      <Chart selectedLocation={selectedLocation} locationToggleHandler={locationToggleHandler} />

      <StyledBtnWrapper>
        {chartUniqueLocation.map(id => (
          <LocationBtn
            key={id}
            id={id}
            selectedLocation={selectedLocation}
            locationToggleHandler={locationToggleHandler}
          />
        ))}
      </StyledBtnWrapper>
    </>
  );

  ```

  </details>

## 📽 구현 영상

## 🗂️ 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜httpClient.ts
 ┣ 📂components
 ┃ ┣ 📂Chart
 ┃ ┃ ┣ 📜Chart.tsx
 ┃ ┃ ┣ 📜CustomTooltip.tsx
 ┃ ┃ ┗ 📜LocationBtn.tsx
 ┃ ┗ 📂Common
 ┃ ┃ ┗ 📂Layout
 ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┣ 📂constant
 ┃ ┗ 📜chart.const.ts
 ┣ 📂hooks
 ┃ ┗ 📜useChartData.ts
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜ErrorPage.tsx
 ┃ ┗ 📂Home
 ┃ ┃ ┗ 📜Home.tsx
 ┣ 📂router
 ┃ ┗ 📜Router.tsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.ts
 ┗ 📂types
 ┃ ┗ 📜chart.ts
```
