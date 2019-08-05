Vue.component("topnav",{
    template:
    `
    <ul id="nav">
    <li>
        <a href="javascript:;">
            <i class="iconfont left-nav-li" lay-tips="会员管理">&#xe6b8;</i>
            <cite>会员管理</cite>
            <i class="iconfont nav_right">&#xe697;</i></a>
        <ul class="sub-menu">
            <li>
                <a onclick="xadmin.add_tab('会员列表(静态表格)','member-list.html')">
                    <i class="iconfont">&#xe6a7;</i>
                    <cite>会员列表</cite></a>
            </li>
        </ul>
    </li>
    <li>
        <a href="javascript:;">
            <i class="iconfont left-nav-li" lay-tips="订单管理">&#xe723;</i>
            <cite>订单管理</cite>
            <i class="iconfont nav_right">&#xe697;</i></a>
        <ul class="sub-menu">
            <li>
                <a onclick="xadmin.add_tab('订单列表','order-list.html')">
                    <i class="iconfont">&#xe6a7;</i>
                    <cite>订单列表</cite></a>
            </li>
            </ul>
            </li>
            <li>
                    <a href="javascript:;">
                        <i class="iconfont left-nav-li" lay-tips="管理员管理">&#xe726;</i>
                        <cite>管理员管理</cite>
                        <i class="iconfont nav_right">&#xe697;</i></a>
                    <ul class="sub-menu">
                        <li>
                            <a onclick="xadmin.add_tab('管理员列表','admin-list.html')">
                                <i class="iconfont">&#xe6a7;</i>
                                <cite>管理员列表</cite></a>
                        </li>
                        <li>
                            <a onclick="xadmin.add_tab('角色管理','admin-role.html')">
                                <i class="iconfont">&#xe6a7;</i>
                                <cite>角色管理</cite></a>
                        </li>
                        <li>
                            <a onclick="xadmin.add_tab('权限分类','admin-cate.html')">
                                <i class="iconfont">&#xe6a7;</i>
                                <cite>权限分类</cite></a>
                        </li>
                        <li>
                            <a onclick="xadmin.add_tab('权限管理','admin-rule.html')">
                                <i class="iconfont">&#xe6a7;</i>
                                <cite>权限管理</cite></a>
                        </li>
                    </ul>
                </li>
          
        </ul>

    `,
    data:function(){
      
    },
    methods:{
     
    }
})