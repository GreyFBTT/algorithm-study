// 기본적인 맥락

// piece of data - val
// reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 노드 값을 추가하려면 아래와 같은 방식으로 next를 계속 붙여가면 해야한다.
// let first = new Node('Hi')
// first.next = new Node('how')
// first.next.next = new Node('are')
// first.next.next.next = new Node('you')

// 너무 귀찮은 일이니 Node 인스턴스를 이용하여 쉬운 메소드로 정의해보자.

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // ==========================================================================================
    // push method => 리스트의 마지막에 데이터를 추가
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        // 추가완료된 리스트를 return
        return this;
    }

    //// traverse : 순서대로 노드 데이터를 따라 조회
    // traverse() {
    //     let current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    // ==========================================================================================
    // pop method => 리스트 마지막 데이터를 삭제
    pop() {
        // 리스트가 비어있을 때는 그냥 undefined
        if (!this.head) return undefined;

        let temp = this.head;
        // let pre = null 로 생각했으나 while문을 통과하지 않는 길이가 1인 경우 pre.next => null.next 로 오류가 발생한다.
        // 따라서 pre = temp = this.head 으로 초기설정.
        let pre = temp;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        // 노드가 하나만 남아 있을 경우 위의 식으로 길이는 0이 되지만 head와 tail의 노드는 그대로 저장되어 있다.
        // 따라서 null로 변경
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // 삭제한게 무엇인지 return
        return temp;
    }

    // ==========================================================================================
    // shift method => 리스트 가장 앞쪽 데이터를 삭제
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;

        // 노드가 하나만 남아 있을 경우 head는 다음 노드가 없기 때문에 null로 바뀌지만 tail의 node는 그대로 남게 된다.
        // 따라서 tail 도 null로 바꿔주기
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    // ==========================================================================================
    // unshift method => 리스트 가장 앞쪽에 새로운 노드 추가
    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    // ==========================================================================================
    // get method => 리스트는 노드의 index번호가 없지만 임의로 부여하여 n번째의 노드를 알아내는 함수
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return;
        }
        let temp = this.head;
        let count = 0;
        // while (count !== idx) 와 같이 while문에 조건을 거는 방법도 있다. (더 간단명료)
        while (temp.next) {
            if (count === idx) {
                break;
            }
            temp = temp.next;
            count++;
        }

        return temp;
    }

    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode) {
            temp.val = val;
            return foundNode;
        }

        return false;
    }
}

const list = new SinglyLinkedList();
list.unshift(10);
list.unshift(40);
list.push(123);
list.push(55);
// console.log(list.push(100));
console.log(list);
// console.log(list.pop());
// console.log(list.pop());
console.log(list.set(3, 100));
console.log(list);

// console.log(list);
