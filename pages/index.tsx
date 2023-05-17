import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { GraphQLClient, gql } from 'graphql-request'
import { BlogCard } from '@/components/BlogCard';
import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { Info } from '@/components/Info';
import { GetStaticProps } from 'next';
import { AnimatedParticles } from '@/components/AnimatedParticles';
import { Nunito} from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg6idcnc0tde01t3cvzvgg5l/master"
);

const QUERY = gql`
{
  posts(orderBy: datePublished_DESC) {
    id
    title
    datePublished
    slug
    content {
      html
    }
    author {
      name
      avatar {
        url
      }
    }
    coverPhoto {
      url
    }
  }
}
`;

const PROJECT_QUERY = gql`
  {
    projects {
      projectTitle
      projectPhoto {
        url
      }
      projectDescription {
        html
      }
    }
  }
`

interface Post {
  id: string;
  title: string;
  datePublished: string;
  slug: string;
  content: {
    html: string;
  };
  author: {
    name: string;
    avatar: {
      url: any;
    };
  };
  coverPhoto: {
    url: any;
  };
}

interface Project {
  projectTitle: string;
  projectPhoto: {
    url: string;
  };
  projectDescription: {
    html: string;
  };
}

interface Props {
  posts: Post[];
  projects: Project[];
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const { posts } = await graphcms.request<{ posts: Post[] }>(QUERY);
  const { projects } = await graphcms.request<{ projects: Project[] }>(PROJECT_QUERY);

  return {
    props: {
      posts,
      projects,
    },
    revalidate: 10,
  };
};

export default function Home({ posts, projects }: { posts: Post[], projects: Project[] }) {
  return (
    <>
      <div className={`${styles.container} ${nunito.className}`}>
        <Head>
          <title>debix</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <Navbar author={posts[0].author} />
        <main className={styles.main}>
          <div className={styles.infoContainer}>
            <Info />
            <div className={styles.projectsContainer}>
              {projects?.map((Project, id) => (
                <ProjectCard key={id}
                  projectTitle={Project.projectTitle}
                  projectPhoto={Project.projectPhoto}
                  projectDescription={Project.projectDescription}
                />
              ))}
            </div>
          </div>
          <div className={styles.posts}>
            {posts?.map((post, id) => (
              <BlogCard key={id}
                title={post.title}
                coverPhoto={post.coverPhoto}
                author={post.author}
                datePublished={post.datePublished}
                slug={post.slug}
              />
            ))}
          </div>
        </main>
        <AnimatedParticles />
      </div>
    </>
  )
}