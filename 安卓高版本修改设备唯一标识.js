/**

Author:MHC
Date:2023.06.02

*/

function modifyID()
{
	Java.performNow(function()
	{  
		console.log("开始hook。。。");
		
		try {
			//设备的 androidId ，很多都是获取这个
			var currentApplication = Java.use("android.app.ActivityThread").currentApplication();
			var context = currentApplication.getApplicationContext();
			let Secure = Java.use("android.provider.Settings$Secure");
	/* 		var androidId = Secure.getString(context.getContentResolver(),Secure.ANDROID_ID.value)
			console.log("androidId:"+androidId); */
			Secure.getString.overload("android.content.ContentResolver","java.lang.String").implementation = function(ContentResolver,str)
			{
				//打印堆栈信息
				console.log("\n"+Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
				
				var androidId = this.getString(ContentResolver,str);
				console.log("原始androidId:"+androidId); 
				//androidId = Java.use("java.lang.String").$new("fe2e62a4c0054088");//随意构造
				return androidId;
			}
		} catch (error) {
			//如果报错，那就 setTimeout 的时间加长点
			console.log("error错误:"+error); 
		}

		
		if(change)
		{
			let Build = Java.use("android.os.Build");
			var BRAND = Build.BRAND.value = Java.use("java.lang.String").$new("huawei");//品牌
			console.log("\nBRAND:\t\t\t"+BRAND);

			var BOOTLOADER = Build.BOOTLOADER.value;
			console.log("BOOTLOADER:\t\t"+BOOTLOADER);
			
			var BOARD = Build.BOARD.value;
			console.log("BOARD:\t\t\t"+BOARD);

			var CPU_ABI = Build.CPU_ABI.value;
			console.log("CPU_ABI:\t\t"+CPU_ABI);

			var CPU_ABI2 = Build.CPU_ABI2.value;
			console.log("CPU_ABI2:\t\t"+CPU_ABI2);
			
			var DEVICE = Build.DEVICE.value = Java.use("java.lang.String").$new("fuck");//机型代号（红米k40S：munch）
			console.log("DEVICE:\t\t\t"+DEVICE);

			var DISPLAY = Build.DISPLAY.value = Java.use("java.lang.String").$new("SKQ1.211006.001 release-keys");
			console.log("DISPLAY:\t\t"+DISPLAY);

			var FINGERPRINT = Build.FINGERPRINT.value = Java.use("java.lang.String").$new("huawei/fuck/fuck:11/SKQ1.20000.001/V13.0.11.0.SLMCNXM:user/release-keys");
			console.log("FINGERPRINT:\t\t"+FINGERPRINT);

			var HARDWARE = Build.HARDWARE.value;
			console.log("HARDWARE:\t\t"+HARDWARE);

			var HOST = Build.HOST.value= Java.use("java.lang.String").$new("m1-xm-ota-bd008.bj.idc.huawei.com");
			console.log("HOST:\t\t\t"+HOST);

			var MANUFACTURER = Build.MANUFACTURER.value = Java.use("java.lang.String").$new("huawei");
			console.log("MANUFACTURER:\t\t"+MANUFACTURER);

			var PRODUCT = Build.PRODUCT.value= Java.use("java.lang.String").$new("fuck");
			console.log("PRODUCT:\t\t"+PRODUCT);

			var RADIO = Build.RADIO.value;
			console.log("RADIO:\t\t\t"+RADIO);

			var MODEL = Build.MODEL.value= Java.use("java.lang.String").$new("22222222RC");
			console.log("MODEL:\t\t\t"+MODEL);

			var SUPPORTED_64_BIT_ABIS = Build.SUPPORTED_64_BIT_ABIS.value;
			console.log("SUPPORTED_64_BIT_ABIS:\t"+SUPPORTED_64_BIT_ABIS);

			var SUPPORTED_32_BIT_ABIS = Build.SUPPORTED_32_BIT_ABIS.value;
			console.log("SUPPORTED_32_BIT_ABIS:\t"+SUPPORTED_32_BIT_ABIS);

			var SUPPORTED_ABIS = Build.SUPPORTED_ABIS.value;
			console.log("SUPPORTED_ABIS:\t\t"+SUPPORTED_ABIS); 
		}else{

			let Build = Java.use("android.os.Build");
			var BRAND = Build.BRAND.value;
			console.log("BRAND:\t\t\t"+BRAND);

			var BOOTLOADER = Build.BOOTLOADER.value;
			console.log("BOOTLOADER:\t\t"+BOOTLOADER);
			
			var BOARD = Build.BOARD.value;
			console.log("BOARD:\t\t\t"+BOARD);

			var CPU_ABI = Build.CPU_ABI.value;
			console.log("CPU_ABI:\t\t"+CPU_ABI);

			var CPU_ABI2 = Build.CPU_ABI2.value;
			console.log("CPU_ABI2:\t\t"+CPU_ABI2);
			
			var DEVICE = Build.DEVICE.value;
			console.log("DEVICE:\t\t\t"+DEVICE);

			var DISPLAY = Build.DISPLAY.value;
			console.log("DISPLAY:\t\t"+DISPLAY);

			var FINGERPRINT = Build.FINGERPRINT.value ;
			console.log("FINGERPRINT:\t\t"+FINGERPRINT);

			var HARDWARE = Build.HARDWARE.value;
			console.log("HARDWARE:\t\t"+HARDWARE);

			var HOST = Build.HOST.value;
			console.log("HOST:\t\t\t"+HOST);

			var MANUFACTURER = Build.MANUFACTURER.value;
			console.log("MANUFACTURER:\t\t"+MANUFACTURER);

			var PRODUCT = Build.PRODUCT.value;
			console.log("PRODUCT:\t\t"+PRODUCT);

			var RADIO = Build.RADIO.value;
			console.log("RADIO:\t\t\t"+RADIO);

			var MODEL = Build.MODEL.value;
			console.log("MODEL:\t\t\t"+MODEL);

			var SUPPORTED_64_BIT_ABIS = Build.SUPPORTED_64_BIT_ABIS.value;
			console.log("SUPPORTED_64_BIT_ABIS:\t"+SUPPORTED_64_BIT_ABIS);

			var SUPPORTED_32_BIT_ABIS = Build.SUPPORTED_32_BIT_ABIS.value;
			console.log("SUPPORTED_32_BIT_ABIS:\t"+SUPPORTED_32_BIT_ABIS);

			var SUPPORTED_ABIS = Build.SUPPORTED_ABIS.value;
			console.log("SUPPORTED_ABIS:\t\t"+SUPPORTED_ABIS); 
		}
 
    });

}

/**
Android 在高版本中限制了对设备唯一标识（如 IMEI）的访问

修改部分唯一标识
修改以上 Java.use("java.lang.String").$new( 后面的字符串

*/

//改变设备标识，
//true：改变
//false：不改
var change = false;
//setImmediate(modifyID);

//延迟50毫秒是为了保证能获取到 getApplicationContext
setTimeout(modifyID,50);










