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

const interpolate = (str, data) => {
  if (typeof str !== "string") return str;
  return str.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => data[key] ?? `{{ ${key} }}`);
};

module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      const target = data.publishTarget || (process.env.IS_LOCAL === "true" ? "local" : "web");
      return isVisibleForTarget(data, target) ? data.permalink : false;
    },
    keyvisual: (data) => interpolate(data.keyvisual, data),
    bannervisual: (data) => interpolate(data.bannervisual, data),
  }
};
