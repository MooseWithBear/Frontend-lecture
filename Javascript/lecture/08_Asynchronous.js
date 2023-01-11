// 동기(Synchronous)와 비동기(Asynchronous)
// 동기 : 순차적으로 코드 실행 O
// 비동기 : 순차적으로 코드 실행 X

// 동기방식 ex) : console.log("a");console.log("a");console.log("a");
// 비동기방식 ex) : addEventListener(), setTimeout() 처럼 바로바로 실행되지 않고 실행을 제어하는 방식


// 아래 코드를 실행하게 되면 console.log가 먼저 실행되는 것을 볼 수 있는데, 서버에서 데이터가 언제 보내주는지 정확히 알 수 없으니 다음 코드를 바로 실행하지 않고 기다리기 때문이다. (비동기)
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') // api를 통해 데이터를 요청(request)하고 서버에서 응답(res)하여 전송해준다.
    // 
    .then(res => res.json())
    .then(res => console.log(res))
    

    console.log(1);
    console.log(2);
    console.log(3);

    // .then(res => {  // 이런식으로 작성하게 된다면 순서대로 api코드 이후에 console.log가 실행될 것이다.
    //     console.log(res)
    //     console.log(1);
    //     console.log(2);
    //     console.log(3);
    // })

    // ===========================================

    // 1
    // 2
    // 3

    // {
    //     Search: [
    //       {
    //         Title: 'Frozen',
    //         Year: '2013',
    //         imdbID: 'tt2294629',
    //         Type: 'movie',
    //         Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg'
    //       },
    //       {
    //         Title: 'Frozen II',
    //         Year: '2019',
    //         imdbID: 'tt4520988',
    //         Type: 'movie',
    //         Poster: 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg'
    //       },




    // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    // 콜백 패턴
    