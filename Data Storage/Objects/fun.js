function fun(n){
    if(n==0){
        return;
    }


    fun(n-1);
    console.log(n);
}
fun(6);