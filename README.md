# modifyID
Android 在高版本中限制了对设备唯一标识（如 IMEI）的访问

修改部分唯一标识
修改以上 Java.use("java.lang.String").$new( 后面的字符串


//改变设备标识
//true：改变
//false：不改
var change = false;
//setImmediate(modifyID);

//延迟50毫秒是为了保证能获取到 getApplicationContext
setTimeout(modifyID,50);
