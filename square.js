var isSquare = function(n){
  if (n < 0){
    return false
  }
 for (var i = 0; i < n / 2 + 2; i++)
            {
                if (i * i == n)
                {
                    return true;
                }
            }
            return false;
  
  }
