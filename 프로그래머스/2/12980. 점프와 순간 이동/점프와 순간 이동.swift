import Foundation

func solution(_ n:Int) -> Int 
{
    var ans = 1
    var num = n
    
    while num > 1 {
        if num % 2 == 1 {
           num -= 1 
            ans += 1
        }
        num /= 2
    }

    return ans
}