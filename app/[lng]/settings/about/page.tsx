import GithubContent from './_components/github_content';

export default function Page() {
  return (
    <div className="p-8 mx-auto flex flex-col gap-3 justify-center">
      <div className="w-full p-4 m-auto rounded-md">
        <GithubContent />
      </div>
    </div>
  );
}
