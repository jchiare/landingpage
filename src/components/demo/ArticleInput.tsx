function ArticleInput({ setZendeskUrl, isValidZendeskUrl }) {
  return (
    <div className="mx-auto max-w-3xl">
      <form className="mx-auto mt-8">
        <div className="mb-4">
          <label
            className="smb-2 ml-2 block text-xl font-bold text-gray-700"
            htmlFor="article">
            Zendesk Article Url
          </label>
          <input
            className={` w-full appearance-none rounded border-0 py-2 px-3 text-lg leading-tight text-gray-700 shadow ring-1 focus:ring-2 focus:ring-inset ${
              isValidZendeskUrl
                ? "ring-green-500 focus:ring-green-500"
                : "ring-red-500 focus:ring-red-500"
            } `}
            id="article"
            type="text"
            onChange={(e) => setZendeskUrl(e.target.value)}
            placeholder="https://support.zendesk.com/hc/en-us/articles/4408884056346-Introduction-Getting-started-with-Zendesk-Support"
            autoFocus
          />
        </div>
      </form>
    </div>
  );
}
export default ArticleInput;