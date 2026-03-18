const isVisibleForTarget = (data, target) => {
  if (!data || typeof data !== "object") return true;

  if (Array.isArray(data.public)) {
    return data.public.includes(target);
  }

  if (typeof data.public === "string") {
    return data.public === target;
  }

  return !data.draft;
};

module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      const target = data.publishTarget || (process.env.IS_LOCAL === "true" ? "local" : "web");
      return isVisibleForTarget(data, target) ? data.permalink : false;
    }
  }
};
