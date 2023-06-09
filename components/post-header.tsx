import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title,  date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg italic">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
