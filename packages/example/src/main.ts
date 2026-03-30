import { apiUserInfo } from "@xinli";
import { apiUserGetPage } from "@yusuan";
import qianniao from "@qianniao";
// xinli
apiUserInfo.postItem({
  data: {
    name: "张三",
    phone: "18888888888",
  },
});
apiUserInfo.deleteItem({
  data: [],
});
apiUserInfo.getPage({
  query: {
    pageIndex: 1,
  },
});
// yusuan
apiUserGetPage({
  query: {
    page: 1,
    size: 10,
  },
});
// qianniao
qianniao.app.postByIdRegenerateSecret({
  params: {
    id: 1,
  },
});
