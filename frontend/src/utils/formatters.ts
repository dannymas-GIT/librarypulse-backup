export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 0) {
    // Future date
    const futureSeconds = Math.abs(diffInSeconds);
    if (futureSeconds < 60) return 'in less than a minute';
    if (futureSeconds < 3600) return `in ${Math.floor(futureSeconds / 60)} minutes`;
    if (futureSeconds < 86400) return `in ${Math.floor(futureSeconds / 3600)} hours`;
    return `in ${Math.floor(futureSeconds / 86400)} days`;
  }

  // Past date
  if (diffInSeconds < 60) return 'less than a minute ago';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
}; 