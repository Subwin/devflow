import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = Array.from({ length: 10 }, (_, index) => ({
  clerkId: index % 2 === 0 ? `clerk${index + 1}` : null,
  _id: `question${index + 1}`,
  title: `Question Title ${index + 1}`,
  tags: [
    { _id: `tag${index + 1}_1`, name: `Tag ${index + 1}_1` },
    { _id: `tag${index + 1}_2`, name: `Tag ${index + 1}_2` },
    // 可以根据需要增加更多标签
  ],
  author: {
    _id: `author${index + 1}`,
    name: `Author ${index + 1}`,
    picture: `author${index + 1}.jpg`,
    clerkId: index % 2 === 0 ? `clerk${index + 1}` : null,
  },
  upvotes: Math.floor(Math.random() * 1000000),
  views: Math.floor(Math.random() * 1000000),
  answers: [
    { answerId: 1, content: `Answer ${index + 1}_1` },
    { answerId: 2, content: `Answer ${index + 1}_2` },
    // 可以根据需要增加更多答案
  ],
  createdAt: new Date(),
}));

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex  justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => {
            return <QuestionCard key={question._id} {...question} />;
          })
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
