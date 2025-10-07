import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Main container for all pages
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    
    // Modern gradient-style container
    gradientContainer: {
        flex: 1,
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 24,
    },
    
    // Page titles with modern typography
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#f8fafc',
        marginBottom: 32,
        textAlign: 'center',
        letterSpacing: -0.5,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
    
    // Modern glassmorphism buttons
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 16,
        width: '85%',
        marginVertical: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
    },
    
    // Primary action button
    primaryButton: {
        backgroundColor: '#3b82f6',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 16,
        width: '85%',
        marginVertical: 12,
        shadowColor: '#3b82f6',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    
    // Modern input fields with floating style
    input: {
        width: '90%',
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginVertical: 12,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
        borderRadius: 16,
        fontSize: 16,
        color: '#f8fafc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    
    // Modern card design for lists
    listContainer: {
        flex: 1,
        backgroundColor: '#0f172a',
        paddingTop: 60,
        paddingHorizontal: 24,
    },
    
    pageTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: '#f8fafc',
        marginBottom: 32,
        textAlign: 'center',
        letterSpacing: -0.3,
    },
    
    list: {
        width: '100%',
        paddingBottom: 24,
    },
    
    // Modern card with blur effect
    userCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        padding: 24,
        marginVertical: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 10,
        backdropFilter: 'blur(10px)',
    },
    
    userText: {
        fontSize: 16,
        color: '#cbd5e1',
        marginBottom: 8,
        fontWeight: '500',
        lineHeight: 24,
    },
    
    userEmail: {
        fontSize: 16,
        color: '#60a5fa',
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    
    // Modern labels
    label: {
        fontSize: 12,
        color: '#94a3b8',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 4,
    },
    
    // Review page modern styling
    reviewContainer: {
        flex: 1,
        backgroundColor: '#0f172a',
        padding: 24,
        paddingTop: 60,
    },
    
    reviewCard: {
        color: '#000000ff',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        padding: 24,
        borderRadius: 20,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 8,
    },
    
    reviewText: {
        fontSize: 16,
        color: '#e2e8f0',
        marginBottom: 12,
        fontWeight: '500',
        lineHeight: 24,
    },
    
    // Button container with modern spacing
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 24,
    },
    
    // Success/Error states
    successButton: {
        backgroundColor: '#10b981',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 16,
        shadowColor: '#10b981',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
    },
    
    errorButton: {
        backgroundColor: '#ef4444',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 16,
        shadowColor: '#ef4444',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
    },
    
    // Loading and empty states
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
    },
    
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#60a5fa',
        fontWeight: '500',
    },
    
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 80,
    },
    
    emptyStateText: {
        fontSize: 18,
        color: '#64748b',
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 28,
    },
});

export default styles;