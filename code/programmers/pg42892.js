class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function compare1(a,b){
    if(a[1] <= b[1]){
        return 1;
    }else{
        return -1;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    insert(arr){
        const x = arr[0];
        const val = arr[2];

        const newNode = new Node([x,val]);
        if(!this.root) return this.root = newNode;

        const cur = this.root;
        return this._insert(newNode,cur);
    }

    _insert(newNode,cur){
        if(newNode.value[0] < cur.value[0]){
            if(cur.left){
                cur = cur.left;
                return this._insert(newNode,cur);
            }else{
                return cur.left = newNode;
            }
        }else{
            if(cur.right){
                cur = cur.right;
                return this._insert(newNode,cur);
            }else{
                return cur.right = newNode;
            }

        }
    }

    preorder(arr){
        const current = this.root;
        this._preorder(current, arr);
    }

    _preorder(node, arr){
        arr.push(node.value[1]);
        if(node.left) this._preorder(node.left, arr);
        if(node.right) this._preorder(node.right, arr);
        return;
    }
    
    postorder(arr){
        const current = this.root;
        this._postorder(current, arr);
    }
    
    _postorder(node, arr){
        if(node.left) this._postorder(node.left, arr);
        if(node.right) this._postorder(node.right, arr);
        arr.push(node.value[1]);
        return;
        
    }

}

function solution(nodeinfo) {

    for(let i = 0 ; i < nodeinfo.length ; i++){
        nodeinfo[i].push(i+1);
    }
    nodeinfo.sort(compare1);

    const tree = new Tree();

    for(let i = 0 ; i < nodeinfo.length ; i++){
        tree.insert(nodeinfo[i]);
    }

    const pre = [];
    const post = [];
    tree.preorder(pre);
    tree.postorder(post);

    return [pre,post];
}




console.log(solution([[5,3],[11,5],[13,3],[3,5],[6,1],[1,3],[8,6],[7,2],[2,2]]))
