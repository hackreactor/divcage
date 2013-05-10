

  for(var j = 10; j < h-10; j++){
    for(var i = 10; i < w-10; i++){
      var l10 = map[i-10][j];
            // scores[i][j] = l10+l9+l8+l7+l6+l5+l4+l3+l2+l1+r1+r2+r3+r4+r5+r6+r7+r8+r9+r10+u10+u9+u8+u7+u6+u5+u4+u3+u2+u1+d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+self;
        for(var ci = 10; ci > 0; ci--) {
          scores[i][j] = map[i-ci][j] + map[i+ci][j] + map[i][j - ci] + map[i][j + ci] + map[i][j];


+u10+u9+u8+u7+u6+u5+u4+u3+u2+u1+d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+self;
        }
    }
  };