//~ 동기(Synchronous)와 비동기(Asynchronous)
// 동기 : 순차적으로 코드 실행 O
// 비동기 : 순차적으로 코드 실행 X

// const { get } = require("cheerio/lib/api/traversing");

// 동기방식 ex) : console.log("a");console.log("a");console.log("a");
// 비동기방식 ex) : addEventListener(), setTimeout() 처럼 바로바로 실행되지 않고 실행을 제어하는 방식


// 아래 코드를 실행하게 되면 console.log가 먼저 실행되는 것을 볼 수 있는데, 서버에서 데이터가 언제 보내주는지 정확히 알 수 없으니 다음 코드를 바로 실행하지 않고 기다리기 때문이다. (비동기)
// fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') // api를 통해 데이터를 요청(request)하고 서버에서 응답(res)하여 전송해준다.
//     // 
//     .then(res => res.json())
//     .then(res => console.log(res))
    

//     console.log(1);
//     console.log(2);
//     console.log(3);

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

    //~ 콜백 패턴
    // 콜백을 이용해 비동기패턴관리를 할 수 있다.
        // const a = (callback) => {
        //     setTimeout(() => {
        //         console.log(1)
        //         callback()
        //     }, 1000);
        // }
        // // const b = () => console.log(2)
        // const b = (callback) => {
        //     setTimeout(() => {
        //         console.log(2)
        //         callback()
        //     }, 1000);
        // }

        // const c = (callback) => {
        //     setTimeout(() => {
        //         console.log(3)
        //         callback()
        //     }, 1000);
        // }

        // const d = () => console.log(4)

    //콜백지옥
    // a(()=>{ // 이렇게 콜백패턴을 만들면 1이먼저 나온후2가 나타난다. callback의 매개변수로 b()가 되면서 1이먼저 나온후 콜백함수를 작동시키되 되면서 2가 출력된다.
    //     b(() => {
    //         c(() => {
    //             d()
    //         })
    //     })
    // })

//~ 콜백패턴과 콜백지옥에 대한 추가 이해
const getMovies = (movieName, callback) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            callback()
        })
}

// 아래 순서대로 코드가 실행되기는 했어도 결과가 출력되는 순서는 매번 다를 수 있다. 
// api를 통해 데이터를 받아오는 시간은 알 수 없고 각각 다르기 때문이다. 

// getMovies('frozen', () => {
//     console.log('겨울왕국!')
// })
// getMovies('avengers', () => {
//     console.log('어벤져스!')
// })
// getMovies('avatar', () => {
//     console.log('아바타!')
// })

// 아래 방법대로 작성한다면 순서를 보장할 수 있다.
    // // 하지만 콜백패턴이 지속되는 코드이기 때문에 콜백지옥이라고 할 수 있다. 콜백지옥은 양이 늘어날 수록 가독성이 점점 떨어진다.
    // getMovies('frozen', () => {
    //     console.log('겨울왕국!')
    //     getMovies('avengers', () => {
    //         console.log('어벤져스!')
    //         getMovies('avatar', () => {
    //             console.log('아바타!')
    //         })
    //     })
    // })

// 콜백지옥은 Promise 클래스를 통해  해결 할 수 있다.
//~ Promise

const a1 = callback => {
    return new Promise (resolve => { // Promise 클래스 사용(생성자 함수) 
        setTimeout(() => {
            console.log(1)
            resolve()
        }, 1000);
    })
}
const b1 = () => console.log(2);

// a1().then(() => { b1() }) // 이 코드


//~ Async Await 패턴으로 비동기 제어하기

const wrap = async() => { // 단순하게 변경할 수 있지만 await은 async가 붙어있는 함수 안에서만 사용할 수 있는 단점이 있다.
    await a1()
    b1()
}
// wrap();

// line 104 코드를 Async Await 패턴을 사용하여 간결하게 변경해보기
const wrap1 = async() => {
    await getMovies('frozen')
    console.log('겨울왕국!') // 주의! await을 console.log 앞에서 사용해선 안 된다. 
    await getMovies('avengers') //  console.log는 return값을 반환하는 함수가 아니기 때문이다.
    console.log('어벤져스!');   // await은 promise 인스턴스가 반환되는 함수에 사용해야한다.
    await getMovies('avatar')
    console.log('아바타!');
}
// wrap1();



//~ Resolve, Reject 그리고 에러 핸들링

//& 기본적인 콜백패턴에서의 에러 핸들링 방법
    // const delayAdd = (index, cb, errorCb) => {
    //     setTimeout(() => {
    //         if (index > 10) {
    //             errorCb(`${index}는 10보다 클 수 없습니다.`)
    //             return;
    //         }
    //         console.log(index);
    //         cb(index + 1)
    //     }, 1000);
    // }

    // delayAdd(
    //     3, // 11부터는 에러메소드가 실행되게 된다.
    //     res => console.log(res), // 정상 -> 첫번째 콜백실행
    //     err => console.log(err) // 이외 -> 두번째 콜백실행 
    //     )

//& then과 catch를 이용한 방법(Promise 생성자 함수 사용)
const delayAdd1 = index => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index > 10) {
                reject(`${index}는 10보다 클 수 없습니다.`)
                return;
            }
            console.log(index);
            resolve(index + 1)
        }, 1000);
    })
}

delayAdd1(13)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    //finally 콜백은 조건에 상관없이 항상 실행된다
    .finally(() => console.log('Done!'))

//& Async, Await 을 사용한 방법
const wrap2 = async () => {
    try {
        const res = await delayAdd1(153)
        console.log(res);
    } catch (err) { // 에러 발생시에는 catch구문이 실행됨
        console.log(err);
    } finally {
        console.log('Done!');
    }
}
wrap2()