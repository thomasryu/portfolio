import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import type { ContentfulContent, ContentfulRichTextAsset } from '@/types'

const RichTextAsset = ({ id, assets }: ContentfulRichTextAsset) => {
  const asset = assets?.find((asset) => asset.sys.id === id)
  if (asset?.url) {
    return <Image src={asset.url} layout='fill' alt={asset.description} />
  }
  return null
}

export const ContentfulMarkdown = ({
  content,
}: {
  content: ContentfulContent
}) =>
  documentToReactComponents(content.json, {
    preserveWhitespace: true,
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),

      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className='mt-8 lg:mt-10 first:mt-0 mb-2'>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className='mt-4 lg:mt-5 first:mt-0 -mb-3 lg:-mb-2'>{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className='mt-4 lg:mt-5 first:mt-0 empty:mt-6 empty:lg:mt-8 empty:invisible'>
          {children}
        </p>
      ),
    },
  })
