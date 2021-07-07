
// 公用组件
const NotFound = (() => import('./pages/error/NotFound.vue'));
const Login = (() => import('./pages/account/Login.vue'));
const Logout = (() => import('./pages/account/Logout.vue'));
const Password = (() => import('./pages/account/password.vue'));
const Avatar = (() => import('./pages/account/avatar.vue'));
// admin组件，管理后台首页部分
const Admin = (() => import('./pages/Admin.vue'));
const AdminIndex = (() => import('./pages/admin/index.vue'));

// 数据字典
const DatatreeIndex = (() => import('./pages/datatree/index.vue'));
// 接口日志
const ApiRequestLog = (() => import('./pages/api/log.vue'));
// 应用管理
const ClientsIndex = (() => import('./pages/clients/index.vue'));
// 角色管理
const RolesIndex = (() => import('./pages/roles/index.vue'));
// 角色菜单
const RolesMenu = (() => import('./pages/roles/menu.vue'));

// 角色策略
const RolesPolicy = (() => import('./pages/roles/policy.vue'));
// 角色用户
const RolesUser = (() => import('./pages/roles/user.vue'));
// 策略管理
const PolicyIndex = (() => import('./pages/policy/index.vue'));
// 消息
const MessageIndex = (() => import('./pages/message/index.vue'));
// 消息
const MessageSystem = (() => import('./pages/message/system.vue'));
// 配置
const ConfigIndex = (() => import('./pages/config/index.vue'));
// 菜单
const MenuIndex = (() => import('./pages/menu/index.vue'));
// 轮播
const BannersIndex = (() => import('./pages/banners/index.vue'));

// 文章
const CmsArticle = (() => import('./pages/cms_article/index.vue'));

// Shop* * * * ** * * * ** * * * ** * * * ** * * * ** * * * ** * * * ** * * * *
const SpCate = (() => import('./pages/spcate/index.vue'));
const SpBrand = (() => import('./pages/sp_brand/index.vue'));
const SpBrandRelate = (() => import('./pages/spcate/relate_brand.vue'));
const SpProp = (() => import('./pages/sp_prop/index.vue'));
const SpPropValue = (() => import('./pages/sp_prop/value.vue'));
const SpPropRelate = (() => import('./pages/spcate/relate_prop.vue'));
// Shop END * * * * ** * * * ** * * * ** * * * ** * * * ** * * * *
// Pay ***********************
const PayOrder = (() => import('./pages/pay_order/index.vue'));
// Pay END *******************


// Goods ***********************
const GoodsIndex = (() => import('./pages/goods/index.vue'));
const GoodsCreate = (() => import('./pages/goods/create.vue'));
const GoodsEdit = (() => import('./pages/goods/edit.vue'));
const GoodsSku = (() => import('./pages/goods/sku.vue'));
const GoodsPlace = (() => import('./pages/goods/place.vue'));
const FreightIndex = (() => import('./pages/freight/index.vue'));
const ShopIndex = (() => import('./pages/sp_shop/index.vue'));
const ShopGoods = (() => import('./pages/sp_shop/goods.vue'));
// Goods END *******************


// User Start *******************
const UserIndex = (() => import('./pages/user/index.vue'));
const UserSession = (() => import('./pages/user/session.vue'));
const UserProfile = (() => import('./pages/user/profile.vue'));
const UserLog = (() => import('./pages/user/log.vue'));
const UserClient = (() => import('./pages/user/client.vue'));
const UserWithdraw = (() => import('./pages/withdrawals/index.vue'));
const UserCoupon = (() => import('./pages/user/coupon.vue'));
const UserWallet = (() => import('./pages/user/wallet.vue'));
// User END *******************

// FriendShip Start *******************
const FriendShipIndex = (() => import('./pages/friendship_links/index.vue'));
// FriendShip END *******************

// Suggest Start *******************
const SuggestIndex = (() => import('./pages/suggest/index.vue'));
// Suggest END *******************

// Suggest Start *******************
const RechargeIndex = (() => import('./pages/recharge/index.vue'));
const RechargeProfile = (() => import('./pages/recharge/profile.vue'));
const RechargeRebate = (() => import('./pages/recharge/rebate.vue'));
// Suggest END *******************

// Region Start *******************
const RegionIndex = (() => import('./pages/region/index.vue'));
const RegionProvince = (() => import('./pages/region/province.vue'));
const RegionCity = (() => import('./pages/region/city.vue'));
const RegionCityArea = (() => import('./pages/region/cityArea.vue'));
const RegionTown = (() => import('./pages/region/town.vue'));
// Region END *******************

// Diet Start *******************
const DtGoodsIndex = (() => import('./pages/dt_goods/index.vue'));
const DtGoodsCreate = (() => import('./pages/dt_goods/create.vue'));
const DtGoodsEdit = (() => import('./pages/dt_goods/edit.vue'));
const DtGoodsSku = (() => import('./pages/dt_goods/sku.vue'));
const DtGoodsStock = (() => import('./pages/dt_goods/stock.vue'));

const DtCate = (() => import('./pages/cate/index.vue'));
const DtCateGoods = (() => import('./pages/cate/relate_goods.vue'));

const DtCouponIndex = (() => import('./pages/dt_coupon/index.vue'));
const DtCouponUser = () => import('./pages/dt_coupon/user.vue');
const DtOrderIndex = (() => import('./pages/dt_order/index.vue'));
const PickupPlaceIndex = (() => import('./pages/pickup_place/index.vue'));
const OrderComplaintsIndex = (() => import('./pages/order_complaints/index.vue'));

// Diet END *******************

const routes = [
    // 地址为空的时候跳转
    // 登录
    { path: '/login', component: Login },
    // 退出
    { path: '/logout', component: Logout },
    // 登录后管理首页
    {
        path: '/admin',
        component: Admin,
        alias: ['/', ''],
        children: [
            { path: 'region/index', component: RegionIndex },
            { path: 'region/province/:id', component: RegionProvince, props: true },
            { path: 'region/city/:code', component: RegionCity, props: true },
            { path: 'region/city_area/:code', component: RegionCityArea, props: true },
            { path: 'region/town/:code', component: RegionTown, props: true },
            { path: 'suggest/index', component: SuggestIndex },
            { path: 'friendship_links/index', component: FriendShipIndex },
            { path: 'user/index', component: UserIndex },
            { path: 'withdrawal/index', component: UserWithdraw },
            { path: 'recharge/index', component: RechargeIndex },
            { path: 'recharge/profile/:id', component: RechargeProfile, props: true },
            { path: 'recharge/rebate', component: RechargeRebate, props: true },
            { path: 'user/session/:id/:limit', component: UserSession, props: true },
            { path: 'user/wallet/:id/:limit', component: UserWallet, props: true },
            { path: 'user/log/:id', component: UserLog, props: true },
            { path: 'user/client/:id/:limit', component: UserClient, props: true },
            { path: 'user/profile/:id', component: UserProfile, props: true },
            { path: 'shop/index', component: ShopIndex },
            { path: 'shop/goods/:id', component: ShopGoods, props: true },
            { path: 'freight/index', component: FreightIndex },
            { path: 'goods/index', component: GoodsIndex },
            { path: 'goods/create', component: GoodsCreate, props: false },
            { path: 'goods/edit/:id', component: GoodsEdit, props: true },
            { path: 'goods/sku/:id', component: GoodsSku, props: true },
            { path: 'goods/place/:id', component: GoodsPlace, props: true },
            { path: 'stock/index', component: DtGoodsStock },
            { path: 'user/coupon/:id', component: UserCoupon, props: true },
            { path: 'dt_goods/index', component: DtGoodsIndex },
            { path: 'dt_goods/create', component: DtGoodsCreate },
            { path: 'dt_goods/edit/:id', component: DtGoodsEdit, props: true },
            { path: 'dt_goods/sku/:id', component: DtGoodsSku, props: true },
            { path: 'dt_coupon/index', component: DtCouponIndex },
            { path: 'dt_coupon/user/:id', component: DtCouponUser, props: true },
            { path: 'dt_order/index', component: DtOrderIndex },
            { path: 'cate/index', component: DtCate },
            { path: 'cate/relate_goods/:id', component: DtCateGoods, props: true },
            { path: 'pickup_place/index', component: PickupPlaceIndex },
            { path: 'order_complaints/index', component: OrderComplaintsIndex },
            { path: 'pay_order/index', component: PayOrder },
            { path: 'sp_brand/index', component: SpBrand, props: true },
            { path: 'spcate/index/:id?', component: SpCate, props: true },
            { path: 'spcate/relate_prop/:id', component: SpPropRelate, props: true },
            { path: 'spcate/relate_brand/:id', component: SpBrandRelate, props: true },
            { path: 'sp_prop/index', component: SpProp },
            { path: 'sp_prop/value/:id', component: SpPropValue, props: true },
            { path: 'cms_article/index', component: CmsArticle },
            { path: 'banners/index', component: BannersIndex },
            { path: 'datatree/index', component: DatatreeIndex },
            { path: 'api/log', component: ApiRequestLog },
            { path: 'clients/index', component: ClientsIndex },
            { path: 'roles/index', component: RolesIndex },
            { path: 'roles/menu/:id', component: RolesMenu, props: true },
            { path: 'roles/policy/:id', component: RolesPolicy, props: true },
            { path: 'roles/user/:id', component: RolesUser, props: true },
            { path: 'policy/index', component: PolicyIndex },
            { path: 'message/index', component: MessageIndex },
            { path: 'message/system', component: MessageSystem },
            { path: 'config/index', component: ConfigIndex },
            { path: 'account/password', component: Password },
            { path: 'menu/index', component: MenuIndex },
            { path: 'account/avatar', component: Avatar },
            { path: 'index', component: AdminIndex },
            { path: ':pathMatch(.*)*', component: NotFound }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

export default routes
