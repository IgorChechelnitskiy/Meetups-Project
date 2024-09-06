import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First meetup",
//     image: "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     address: "Some Address",
//     description: "First meetup description"
//   },
//   {
//     id: "m2",
//     title: "Second meetup",
//     image: "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     address: "Some Address",
//     description: "First meetup description"
//   },
//   {
//     id: "m3",
//     title: "Third meetup",
//     image: "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     address: "Some Address",
//     description: "First meetup description"
//   },
// ];

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Meetups for React Meetups"/>
      </Head>;
      <MeetupList meetups={props.meetups}/>
    </>
  );
}

// export async function grtSeverSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   // fetch data from API
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect("mongodb+srv://korsar:korsar123@cluster0.8417z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  const db = client.db();

  const meetupCollection = await db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 10
  };
}

export default HomePage;