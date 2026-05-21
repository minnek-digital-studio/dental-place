'use client';

import ErrorContent from '@/modules/common/components/error-content';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    return <ErrorContent error={error} reset={reset} />;
}
