import React, { useState, useEffect } from "react";
import {
  Code2,
  Youtube,
  BookOpen,
  Trophy,
  Star,
  Award,
  BookCheck,
} from "lucide-react";

// Custom hook for fetching data (unchanged)
const useFetchProfile = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Existing components remain unchanged...
const LeetCodeProfile = ({ username }) => {
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useFetchProfile(`https://leetcode-stats-api.herokuapp.com/${username}`);

  const {
    data: contestData,
    loading: contestLoading,
    error: contestError,
  } = useFetchProfile(
    `https://leecode-rating-api.vercel.app/user-rating/${username}`
  );

  if (profileLoading || contestLoading)
    return <LoadingCard platform="LeetCode" />;

  if (profileError)
    return <ErrorCard platform="LeetCode" error={profileError} />;
  if (contestError)
    return <ErrorCard platform="LeetCode" error={contestError} />;

  const problemsSolved = profileData?.totalSolved || "0";
  const acceptanceRate = profileData?.acceptanceRate || 0;
  const rating = Math.ceil(contestData?.rating) || "N/A";

  return (
    <ProfileCard
      platform="LeetCode"
      Icon={Code2}
      username={username}
      stats={[
        { label: "Problems Solved", value: problemsSolved },
        { label: "Rating", value: rating },
        { label: "Acceptance Rate", value: `${acceptanceRate}%` },
      ]}
      link={`https://leetcode.com/${username}`}
      bgColor="from-yellow-500 to-orange-500"
    />
  );
};

const CodeForcesProfile = ({ username }) => {
  const { data, loading, error } = useFetchProfile(
    `https://codeforces.com/api/user.info?handles=${username}`
  );

  if (loading) return <LoadingCard platform="CodeForces" />;
  if (error) return <ErrorCard platform="CodeForces" error={error} />;

  const userInfo = data?.result?.[0];
  return (
    <ProfileCard
      platform="CodeForces"
      Icon={Trophy}
      username={username}
      stats={[
        { label: "Rating", value: userInfo?.rating || "N/A" },
        { label: "Rank", value: userInfo?.rank || "N/A" },
        { label: "Max Rating", value: userInfo?.maxRating || "N/A" },
      ]}
      link={`https://codeforces.com/profile/${username}`}
      bgColor="from-blue-500 to-purple-500"
    />
  );
};

// New CodeChef Profile Component
const CodeChefProfile = ({ username }) => {
  const { data, loading, error } = useFetchProfile(
    `https://codechef-api.vercel.app/${username}`
  );

  if (loading) return <LoadingCard platform="CodeChef" />;
  if (error) return <ErrorCard platform="CodeChef" error={error} />;

  return (
    <ProfileCard
      platform="CodeChef"
      Icon={Star}
      username={username}
      stats={[
        { label: "Star", value: data?.stars || "N/A" },
        { label: "Rating", value: data?.highestRating || "N/A" },
        { label: "Global Rank", value: data?.globalRank || "N/A" },
      ]}
      link={`https://www.codechef.com/users/${username}`}
      bgColor="from-amber-700 to-amber-900"
    />
  );
};

// New GeeksforGeeks Profile Component
const GFGProfile = ({ username }) => {
  const { data, loading, error } = useFetchProfile(
    `https://gfg-rating-api.vercel.app/profile/${username}`
  );

  if (loading) return <LoadingCard platform="GeeksforGeeks" />;
  if (error) return <ErrorCard platform="GeeksforGeeks" error={error} />;
  return (
    <ProfileCard
      platform="GeeksforGeeks"
      Icon={Award}
      username={username}
      stats={[
        { label: "Problems Solved", value: data?.problems_solved || "N/A" },
        { label: "Coding Stars", value: data?.stars+'★' || "N/A" },
        { label: "Coding Rating", value: data?.contest_rating || "N/A" },
      ]}
      link={`https://auth.geeksforgeeks.org/user/${username}`}
      bgColor="from-green-500 to-green-700"
    />
  );
};

// Loading and Error Components remain unchanged...
const LoadingCard = ({ platform }) => (
  <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-gray-200 rounded-full" />
      <div className="ml-4">
        <div className="h-5 w-24 bg-gray-200 rounded" />
        <div className="h-4 w-32 bg-gray-200 rounded mt-2" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="text-center">
          <div className="h-5 w-16 bg-gray-200 rounded mx-auto" />
          <div className="h-4 w-20 bg-gray-200 rounded mx-auto mt-2" />
        </div>
      ))}
    </div>
  </div>
);

const ErrorCard = ({ platform, error }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="text-center text-red-500">
      <h3 className="text-xl font-semibold mb-2">{platform}</h3>
      <p className="text-sm">Failed to load profile data</p>
      <p className="text-xs text-gray-500 mt-2">{error}</p>
    </div>
  </div>
);

// Profile Card Component remains unchanged...
const ProfileCard = ({ platform, Icon, username, stats, link, bgColor }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${bgColor}`} />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-gray-700" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">{platform}</h3>
            <p className="text-gray-600">@{username}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-lg font-semibold text-gray-800">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </a>
);

// Updated Main Component
export default function CodingProfiles() {
  const profiles = {
    leetcode: "saichakradharmahendrakar98",
    codeforces: "saichakradharrm",
    codechef: "saicrm",
    gfg: "saichakrkotn",
  };

  const socialData = [
    {
      platform: "YouTube",
      Icon: Youtube,
      username: "Future Stack",
      description:
        "Tech tutorials, coding challenges, and problem-solving videos",
      link: "https://youtube.com/@@CodeMadeSimpleByChakri",
      bgColor: "from-red-500 to-red-700",
    },
    {
      platform: "Medium",
      Icon: BookOpen,
      username: "@saichakradharrm",
      description: "Technical articles, tutorials, and programming insights",
      link: "https://medium.com/@saichakradharrm",
      bgColor: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-2">
          Coding Profiles & Content
        </h2>
        <hr className="w-16 h-1 bg-blue-600 border-0 rounded mb-6 mx-auto" />
        {/* Updated Coding Profiles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <LeetCodeProfile username={profiles.leetcode} />
          <CodeForcesProfile username={profiles.codeforces} />
          <CodeChefProfile username={profiles.codechef} />
          <GFGProfile username={profiles.gfg} />
        </div>

        {/* Social Media Section remains unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialData.map((platform, index) => (
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${platform.bgColor}`} />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <platform.Icon className="w-8 h-8 text-gray-700" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {platform.platform}
                      </h3>
                      <p className="text-gray-600">{platform.username}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{platform.description}</p>
                  <div className="grid grid-cols-2 gap-4"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
