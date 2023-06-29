function solution(n)
{
    return n.toString().split("").reduce((pre, curr) => pre + Number(curr),0);
}