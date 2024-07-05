function solution(phone_number) {
    return phone_number.split("").map((s,i)=> phone_number.length - 4 <= i ? s : "*").join("");
}