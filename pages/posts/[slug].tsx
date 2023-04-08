import { GraphQLClient, gql } from 'graphql-request'
import styles from '@/styles/Slug.module.scss'
import Image from 'next/image'
import { Bubbles } from '@/components/Bubbles';
import { GetStaticProps, GetStaticPaths } from 'next';

const graphcms = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg6idcnc0tde01t3cvzvgg5l/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

interface Post {
    id: string;
    title: string;
    slug: string;
    datePublished: string;
    author: {
      id: string;
      name: string;
      avatar: {
        url: string;
      };
    };
    content: {
      html: string;
    };
    coverPhoto: {
      id: string;
      url: string;
    };
  }

  interface SlugListData {
    posts: {
      slug: string;
    }[];
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    const { posts } = await graphcms.request<SlugListData>(SLUGLIST);
  
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({
    params,
  }) => {
    if (!params?.slug) {
      return { notFound: true };
    }
  
    const slug = params.slug;
    const { post } = await graphcms.request<{ post: Post }>(QUERY, { slug });
  
    return {
      props: {
        post,
      },
      revalidate: 10,
    };
  };

export default function BlogPost({ post }: { post: Post }) {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.blog}>
                    <div>
                        <Image src={post.coverPhoto.url} alt="" width={2000} height={2000} className={styles.cover} />
                    </div>

                    <div className={styles.author}>
                        <Image src={post.author.avatar.url} alt="" width={1000} height={1000} />
                        <div className={styles.authtext}>
                            <h6>By {post.author.name}</h6>
                            <h6 className={styles.date}>{post.datePublished}</h6>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2>{post.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
                    </div>
                </main>
                <Bubbles />
            </div>

        </>
    )
}