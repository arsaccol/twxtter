
import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

TimeAgo.addDefaultLocale(en)



function TimeAgoDisplay({date}) {
    return (
        <div className='TimeAgoDisplay'>Posted: <ReactTimeAgo date={date} locale="en-US"></ReactTimeAgo></div>
    )
}

export default TimeAgoDisplay

