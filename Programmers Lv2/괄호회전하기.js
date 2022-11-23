function solution(s) {
    var answer = 0;
    let arr = s.split("");
    if (arr.length % 2 === 1) return 0;

    function check(arr) {
        let stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
                stack.push(arr[i]);
            } else {
                let leftword = stack.pop();
                if (leftword === "(" && arr[i] === ")") continue;
                if (leftword === "{" && arr[i] === "}") continue;
                if (leftword === "[" && arr[i] === "]") continue;
                return false;
            }
        }
        return true;
    }

    for (let j = 0; j < arr.length; j++) {
        if (check(arr)) answer++;
        arr.push(arr.shift());
    }

    return answer;
}

// 다른 사람 풀이
function solution2(s) {
    answer = 0;
    for (let i = 0; i < s.length; i++) {
        const stack = [];
        // slice를 이용
        // i값이 커짐에 따라 잘라내서 뒤로 붙이는 식으로 간단하게 쓸 수 있다.
        const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);
        for (let j = 0; j < temp.length; j++) {
            if (stack[stack.length - 1] === "(" && temp[j] === ")") stack.pop();
            else if (stack[stack.length - 1] === "[" && temp[j] === "]")
                stack.pop();
            else if (stack[stack.length - 1] === "{" && temp[j] === "}")
                stack.pop();
            else stack.push(temp[j]);
        }
        if (!stack.length) answer++;
    }
    return answer;
}
