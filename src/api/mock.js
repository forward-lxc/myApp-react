import Mock from 'mockjs'


export default Mock.mock('/admin/homeData','post',{
	code:"1",
	data:{
	    navData:[
	        {
	            path:"",
	            title:"关于我",
	        },
			{
			    path:"",
			    title:"技术栈",
			},
			{
			    path:"",
			    title:"工作项目",
			},
			{
			    path:"",
			    title:"个人项目",
			},
			{
			    path:"",
			    title:"简历",
			},
			{
			    path:"",
			    title:"联系我",
			}
	    ]
	},
	message:"success"
})