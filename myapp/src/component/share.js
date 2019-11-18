import React from "react";
import {Link} from "react-router-dom";
import { Popover, Button,Icon} from 'antd';
const content = <div className="popover-content">
                    <Link className="weibo" to="#" title="分享到微博" alt="微博">
                        <Icon type="weibo" />
                    </Link>
                    <Link className="weixin" to="#" title="分享到微信" alt="微信">
                        <Icon type="wechat" />
                    </Link>
                    <Link className="qq" to="#" title="分享到QQ" alt="QQ">
                        <Icon type="qq" />
                    </Link>
                    <Link className="more" to="#" title="分享到其他" alt="其他">
                        <Icon type="dash" />
                    </Link>  
                </div>
export const share = (<Popover className="action-share" placement="top" content={content } trigger="hover">
                        <Button>
                            <Icon type="share-alt" />分享（0）
                        </Button>
                    </Popover>)
  
        
    

